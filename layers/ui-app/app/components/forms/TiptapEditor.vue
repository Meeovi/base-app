<template>
  <div>
    <div class="tiptap-toolbar">
      <div class="tiptap-toolbar-left">
        <v-btn @click.prevent="toggleBold" :class="{ active: editor && editor.isActive && editor.isActive('bold') }">Bold</v-btn>
        <v-btn @click.prevent="toggleItalic" :class="{ active: editor && editor.isActive && editor.isActive('italic') }">Italic</v-btn>
        <v-btn @click.prevent="toggleHeading">H2</v-btn>
        <v-btn @click.prevent="toggleBulletList">• List</v-btn>
        <v-btn @click.prevent="toggleOrderedList">1. List</v-btn>
        <v-btn @click.prevent="setLink">Link</v-btn>
      </div>
    </div>

    <div class="tiptap-editor">
      <editor-content :editor="editor" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'

const props = withDefaults(defineProps<{ modelValue?: string, enableImageUpload?: boolean, extraExtensions?: any[] }>(), { modelValue: '', enableImageUpload: true, extraExtensions: () => [] as any[] })
const emit = defineEmits(['update:modelValue'])

const editor = ref<any>(null)
const fileInput = ref<HTMLInputElement | null>(null)

const runtimeConfig = useRuntimeConfig()

const buildExtensions = (): any[] => {
  const extras = props.extraExtensions || []
  const exts: any[] = [StarterKit]
  // allow future extensions to be passed in
  if (Array.isArray(extras) && extras.length) exts.push(...extras)
  if (props.enableImageUpload) exts.push(Image)
  // include Link extension so link toolbar works
  exts.push(Link)
  return exts
}

onMounted(() => {
  editor.value = new Editor({
    content: props.modelValue ?? '',
    // cast to any to avoid TypeScript generic incompatibility between different extension option types
    extensions: buildExtensions() as any,
    onUpdate: ({ editor }: any) => {
      try {
        emit('update:modelValue', editor.getHTML())
      } catch (e) {
        // ignore
      }
    }
  })
})

watch(() => props.modelValue, (val) => {
  if (!editor.value) return
  const current = editor.value.getHTML()
  if (val == null) val = ''
  if (val !== current) {
    editor.value.commands.setContent(val, false)
  }
})

onBeforeUnmount(() => {
  try { editor.value?.destroy() } catch (e) { /* ignore */ }
})

const triggerFile = () => {
  try { fileInput.value?.click() } catch (e) { /* ignore */ }
}

const onFileChange = async (ev: Event) => {
  const input = ev.target as HTMLInputElement
  const file = input?.files?.[0]
  if (!file) return
    try {
    const uploaded = await uploadFileToDirectus(file)
    const up = uploaded as any
    if (up?.data?.id) {
      const directusUrl = (runtimeConfig.public as any).directus?.url || ''
      const src = `${directusUrl.replace(/\/$/, '')}/assets/${up.data.id}`
      // insert image into editor
      editor.value.chain().focus().setImage({ src }).run()
      // emit updated HTML
      emit('update:modelValue', editor.value.getHTML())
    }
  } catch (err) {
    console.error('TiptapEditor image upload failed', err)
  } finally {
    // reset input
    if (fileInput.value) fileInput.value.value = ''
  }
}

const uploadFileToDirectus = async (file: File): Promise<any> => {
  const cfg = ((runtimeConfig.public as any).directus) || {}
  const url = String((cfg as any).url || '')
  const token = String((cfg as any).auth?.token || '')
  if (!url) throw new Error('Directus url not configured')
  const fd = new FormData()
  fd.append('file', file, file.name)
  try {
    const res = await $fetch(url.replace(/\/$/, '') + '/files', {
      method: 'POST',
      body: fd,
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    })
    // Directus returns { data: { ... } }
    return res
  } catch (e) {
    console.error('uploadFileToDirectus error', e)
    throw e
  }
}

// Toolbar command helpers
const toggleBold = () => {
  if (!editor.value) return
  editor.value.chain().focus().toggleBold().run()
}

const toggleItalic = () => {
  if (!editor.value) return
  editor.value.chain().focus().toggleItalic().run()
}

const toggleHeading = () => {
  if (!editor.value) return
  editor.value.chain().focus().toggleHeading({ level: 2 }).run()
}

const toggleBulletList = () => {
  if (!editor.value) return
  editor.value.chain().focus().toggleBulletList().run()
}

const toggleOrderedList = () => {
  if (!editor.value) return
  editor.value.chain().focus().toggleOrderedList().run()
}

const toggleCodeBlock = () => {
  if (!editor.value) return
  editor.value.chain().focus().toggleCodeBlock().run()
}

const setLink = () => {
  if (!editor.value) return
  const url = window.prompt('Enter URL')
  if (!url) return
  editor.value.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
}
</script>

<style scoped>
.tiptap-toolbar{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px}
.tiptap-toolbar-left, .tiptap-toolbar-right{display:flex;gap:6px}
.tiptap-toolbar v-btn{padding:6px 8px;border:1px solid #ddd;background:#fff;border-radius:4px;cursor:pointer}
.tiptap-toolbar v-btn.active{background:#eee}
.tiptap-editor{border:1px solid #e6e6e6;padding:12px;border-radius:6px;min-height:180px}
</style>

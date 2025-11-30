<template>
  <div v-if="editor" class="container">
    <div class="control-group">
      <div class="button-group">
        <v-btn @click="editor.chain().focus().toggleBold().run()"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }">
          Bold
        </v-btn>
        <v-btn @click="editor.chain().focus().toggleItalic().run()"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }">
          Italic
        </v-btn>
        <v-btn @click="editor.chain().focus().toggleStrike().run()"
          :disabled="!editor.can().chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }">
          Strike
        </v-btn>
        <v-btn @click="editor.chain().focus().toggleCode().run()"
          :disabled="!editor.can().chain().focus().toggleCode().run()"
          :class="{ 'is-active': editor.isActive('code') }">
          Code
        </v-btn>
        <v-btn @click="editor.chain().focus().unsetAllMarks().run()">Clear marks</v-btn>
        <v-btn @click="editor.chain().focus().clearNodes().run()">Clear nodes</v-btn>
        <v-btn @click="editor.chain().focus().setParagraph().run()"
          :class="{ 'is-active': editor.isActive('paragraph') }">
          Paragraph
        </v-btn>
        <v-btn @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
          H1
        </v-btn>
        <v-btn @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
          H2
        </v-btn>
        <v-btn @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
          H3
        </v-btn>
        <v-btn @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
          H4
        </v-btn>
        <v-btn @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
          H5
        </v-btn>
        <v-btn @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
          H6
        </v-btn>
        <v-btn @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'is-active': editor.isActive('bulletList') }">
          Bullet list
        </v-btn>
        <v-btn @click="editor.chain().focus().toggleOrderedList().run()"
          :class="{ 'is-active': editor.isActive('orderedList') }">
          Ordered list
        </v-btn>
        <v-btn @click="editor.chain().focus().toggleCodeBlock().run()"
          :class="{ 'is-active': editor.isActive('codeBlock') }">
          Code block
        </v-btn>
        <v-btn @click="editor.chain().focus().toggleBlockquote().run()"
          :class="{ 'is-active': editor.isActive('blockquote') }">
          Blockquote
        </v-btn>
        <v-btn @click="editor.chain().focus().setHorizontalRule().run()">Horizontal rule</v-btn>
        <v-btn @click="editor.chain().focus().setHardBreak().run()">Hard break</v-btn>
        <v-btn @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
          Undo
        </v-btn>
        <v-btn @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
          Redo
        </v-btn>
        <v-btn @click="editor.chain().focus().setColor('#958DF1').run()"
          :class="{ 'is-active': editor.isActive('textStyle', { color: '#958DF1' }) }">
          Purple
        </v-btn>
      </div>
    </div>
    <editor-content :editor="editor" />
  </div>
</template>

<script setup>
  import {
    ref,
    onMounted,
    onBeforeUnmount
  } from 'vue'
  import {
    Editor,
    EditorContent
  } from '@tiptap/vue-3'
  import StarterKit from '@tiptap/starter-kit'

  const editor = ref(null)

  onMounted(() => {
    editor.value = new Editor({
      content: "",
      extensions: [StarterKit],
    })
  })

  onBeforeUnmount(() => {
    if (editor.value) {
      editor.value.destroy()
      editor.value = null
    }
  })
</script>

<style lang="scss" scoped>
  /* Basic editor styles */
  .tiptap {
    :first-child {
      margin-top: 0;
    }

    /* List styles */
    ul,
    ol {
      padding: 0 1rem;
      margin: 1.25rem 1rem 1.25rem 0.4rem;

      li p {
        margin-top: 0.25em;
        margin-bottom: 0.25em;
      }
    }

    /* Heading styles */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
      margin-top: 2.5rem;
      text-wrap: pretty;
    }

    h1,
    h2 {
      margin-top: 3.5rem;
      margin-bottom: 1.5rem;
    }

    h1 {
      font-size: 1.4rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    h4,
    h5,
    h6 {
      font-size: 1rem;
    }

    /* Code and preformatted text styles */
    code {
      background-color: var(--purple-light);
      border-radius: 0.4rem;
      color: var(--black);
      font-size: 0.85rem;
      padding: 0.25em 0.3em;
    }

    pre {
      background: var(--black);
      border-radius: 0.5rem;
      color: var(--white);
      font-family: 'JetBrainsMono', monospace;
      margin: 1.5rem 0;
      padding: 0.75rem 1rem;

      code {
        background: none;
        color: inherit;
        font-size: 0.8rem;
        padding: 0;
      }
    }

    blockquote {
      border-left: 3px solid var(--gray-3);
      margin: 1.5rem 0;
      padding-left: 1rem;
    }

    hr {
      border: none;
      border-top: 1px solid var(--gray-2);
      margin: 2rem 0;
    }
  }
</style>
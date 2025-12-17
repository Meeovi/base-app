import {
    NovuUI
} from '@novu/js/ui'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    // Only run in client environment since this plugin interacts with the DOM
    if (process.client) {
        const novu = new NovuUI({
            options: {
                applicationIdentifier: `${config.public.applicationId}`,
                subscriber: `${config.public.subscriber}`
            }
        })

        // provide the instance for injection if other parts of the app need it
        try {
            nuxtApp.provide('novu', novu)
        } catch (e) {
            // ignore provide errors
        }

        // Mount the Inbox component to the target element when present
        const el = typeof document !== 'undefined' ? document.getElementById('notification-inbox') : null
        novu.mountComponent({
            name: 'Inbox',
            props: {},
            element: el
        })
    }
})
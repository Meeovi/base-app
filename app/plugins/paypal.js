import {
    loadScript
} from "@paypal/paypal-js";

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig()
    let paypal;

    try {
        paypal = await loadScript({
            clientId: `${config.public.paypalClientId}`
        });
    } catch (error) {
        console.error("failed to load the PayPal JS SDK script", error);
    }

    if (paypal) {
        try {
            await paypal.Buttons().render("#paypal-container");
        } catch (error) {
            console.error("failed to render the PayPal Buttons", error);
        }
    }
});
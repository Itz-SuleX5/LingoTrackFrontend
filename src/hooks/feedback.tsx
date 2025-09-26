import { useState } from 'react';

interface FormData {
    simplePresent: string;
    presentProgressive: string;
    simplePast: string;
}

export const useSubmitForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<any>(null);

    const submitForm = async (formData: FormData) => {
        try{
            setIsLoading(true);
            setError(null);

            const messages = [
                {
                    role: "user",
                    content: `Evalúa estas oraciones en inglés con el verbo "run":

Simple Present: ${formData.simplePresent}
Present Progressive: ${formData.presentProgressive}
Simple Past: ${formData.simplePast}

Reglas estrictas:

1. Revisa solo gramática, estructura, concordancia sujeto-verbo y ortografía básica.
2. No cambies el significado ni agregues palabras distintas.
3. Si la oración es correcta, responde exactamente con "OK" para ese tiempo, sin usar BAD ni agregar explicaciones.
4. Si la oración es incorrecta, responde con BAD y la corrección completa, seguida de una breve explicación en español.
5. Usa exactamente este formato en una sola línea:

OK: Simple Present | OK: Present Progressive | OK: Simple Past

o

BAD: Simple Present → [oración corregida (explicación corta en español)] | BAD: Present Progressive → [oración corregida (explicación corta en español)] | BAD: Simple Past → [oración corregida (explicación corta en español)]

6. Separa las tres evaluaciones con " | ".
7. Prohibido devolver comentarios, paréntesis o explicaciones si la oración ya era correcta.
8. Sé extremadamente conciso: una sola línea y nada más.

  `
                }
            ];

            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer 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',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'openrouter/sonoma-dusk-alpha',
                    messages: messages
                })
            });

            if (!response.ok){
                throw new Error('Error al enviar los datos a OpenRouter');
            }

            const data = await response.json();
            setResponse(data);
            return data;

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {submitForm, isLoading, error, response};
}
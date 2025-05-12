package com.crm.backend;

import com.azure.ai.openai.OpenAIClient;
import com.azure.ai.openai.OpenAIClientBuilder;
import com.azure.ai.openai.models.*;
import com.azure.core.credential.AzureKeyCredential;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class AgentService {

    private final OpenAIClient client;

    public AgentService() {
        this.client = new OpenAIClientBuilder()
                .credential(new AzureKeyCredential("YOUR-API-KEY"))
                .endpoint("https://fdxopenai.openai.azure.com/")
                .buildClient();
    }

    public String processQuery(String query) {
        List<ChatRequestMessage> chatMessages = Arrays.asList(
                new ChatRequestSystemMessage("You are a helpful assistant."),
                new ChatRequestUserMessage(query)
        );

        ChatCompletionsOptions options = new ChatCompletionsOptions(chatMessages)
                .setMaxTokens(1024)
                .setTemperature(1.0)
                .setTopP(1.0);

        ChatCompletions completions = client.getChatCompletions("gpt-4o", options);
        return completions.getChoices().get(0).getMessage().getContent();
    }
}

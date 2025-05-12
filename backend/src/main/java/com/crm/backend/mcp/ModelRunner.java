package com.crm.backend.mcp;

import com.azure.ai.openai.OpenAIClient;
import com.azure.ai.openai.OpenAIClientBuilder;
import com.azure.ai.openai.models.*;
import com.azure.core.credential.AzureKeyCredential;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Component
public class ModelRunner {

    private final OpenAIClient client;
    private final String deploymentName;

    public ModelRunner(
            @Value("${spring.ai.openai.api-key}") String apiKey,
            @Value("${spring.ai.openai.endpoint}") String endpoint,
            @Value("${spring.ai.openai.deployment}") String deploymentName
    ) {
        this.client = new OpenAIClientBuilder()
                .credential(new AzureKeyCredential(apiKey))
                .endpoint(endpoint)
                .buildClient();
        this.deploymentName = deploymentName;
    }

    public String run(Map<String, Object> context, String fdxData) {
        String userPrompt = (String) context.getOrDefault("prompt", "Please analyze the following financial data:");

        List<ChatRequestMessage> messages = Arrays.asList(
                new ChatRequestSystemMessage("You are a financial data assistant that explains API data clearly."),
                new ChatRequestUserMessage(userPrompt + "\n\n" + fdxData)
        );

        ChatCompletionsOptions options = new ChatCompletionsOptions(messages)
                .setTemperature(0.7)
                .setMaxTokens(1024)
                .setTopP(1.0);

        ChatCompletions completions = client.getChatCompletions(deploymentName, options);

        if (completions.getChoices() == null || completions.getChoices().isEmpty()) {
            return "No response from AI model.";
        }

        return completions.getChoices().get(0).getMessage().getContent();
    }
}

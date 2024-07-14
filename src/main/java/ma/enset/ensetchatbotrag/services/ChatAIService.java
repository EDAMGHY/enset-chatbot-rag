package ma.enset.ensetchatbotrag.services;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class ChatAIService {
    private ChatClient chatClient;

    public ChatAIService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    public String ragChat(String question) {
        return chatClient.prompt().user(question).call().content();
    }
}

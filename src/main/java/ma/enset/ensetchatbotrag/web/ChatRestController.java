package ma.enset.ensetchatbotrag.web;

import ma.enset.ensetchatbotrag.services.ChatAIService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/chat", produces = MediaType.TEXT_PLAIN_VALUE)
public class ChatRestController {
    private ChatAIService chatAIService;

    public ChatRestController(ChatAIService chatAIService) {
        this.chatAIService = chatAIService;
    }

    @GetMapping("/ask")
    public String ask(String message) {
        return chatAIService.ragChat(message);
    }
}

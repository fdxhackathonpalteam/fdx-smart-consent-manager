package com.crm.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Frontend URL allowed for CORS
public class ConsentController {

    private final AgentService agentService;

    @Autowired
    public ConsentController(AgentService agentService) {
        this.agentService = agentService;
    }

    // POST /api/ask
    @PostMapping("/ask")
    public ResponseEntity<Map<String, String>> ask(@RequestBody Map<String, String> requestBody) {
        String query = requestBody.get("query");

        if (query == null || query.trim().isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("answer", "Query cannot be empty"));
        }

        try {
            String response = agentService.processQuery(query);
            return ResponseEntity.ok(Map.of("answer", response));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body(Map.of("answer", "AI processing failed"));
        }
    }
}

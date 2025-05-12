package com.crm.backend.mcp;

import com.crm.backend.mcp.model.McpRequest;
import com.crm.backend.mcp.model.McpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/mcp")
@CrossOrigin(origins = "*")
public class McpController {

    private final McpService mcpService;

    @Autowired
    public McpController(McpService mcpService) {
        this.mcpService = mcpService;
    }

    @PostMapping("/ask")
    public ResponseEntity<McpResponse> handleMcpRequest(@RequestBody McpRequest request) {
        if (request.getQuery() == null || request.getQuery().isEmpty()) {
            return ResponseEntity.badRequest().body(new McpResponse("Query cannot be empty", java.util.Map.of()));
        }

        try {
            McpResponse response = mcpService.process(request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body(
                new McpResponse("MCP processing failed: " + e.getMessage(), java.util.Map.of())
            );
        }
    }
}

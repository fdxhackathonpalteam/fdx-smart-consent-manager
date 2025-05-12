package com.crm.backend.mcp.model;

import java.util.Map;

public class McpResponse {
    private String response;
    private Map<String, Object> metadata;

    public McpResponse() {
    }

    public McpResponse(String response, Map<String, Object> metadata) {
        this.response = response;
        this.metadata = metadata;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public Map<String, Object> getMetadata() {
        return metadata;
    }

    public void setMetadata(Map<String, Object> metadata) {
        this.metadata = metadata;
    }
}

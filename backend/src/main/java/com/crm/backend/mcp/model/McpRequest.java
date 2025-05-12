package com.crm.backend.mcp.model;

import java.util.Map;

public class McpRequest {
    private String userId;
    private String query;
    private Map<String, Object> metadata; // renamed from 'context'

    public McpRequest() {
    }

    public McpRequest(String userId, String query, Map<String, Object> metadata) {
        this.userId = userId;
        this.query = query;
        this.metadata = metadata;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public Map<String, Object> getMetadata() {
        return metadata;
    }

    public void setMetadata(Map<String, Object> metadata) {
        this.metadata = metadata;
    }
}

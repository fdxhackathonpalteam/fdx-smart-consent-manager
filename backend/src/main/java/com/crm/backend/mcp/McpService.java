package com.crm.backend.mcp;

import com.crm.backend.mcp.model.McpRequest;
import com.crm.backend.mcp.model.McpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class McpService {

    private final ContextBuilder contextBuilder;
    private final FdxAdapter fdxAdapter;
    private final ModelRunner modelRunner;

    @Autowired
    public McpService(ContextBuilder contextBuilder, FdxAdapter fdxAdapter, ModelRunner modelRunner) {
        this.contextBuilder = contextBuilder;
        this.fdxAdapter = fdxAdapter;
        this.modelRunner = modelRunner;
    }

    public McpResponse process(McpRequest request) {
        // Step 1: Build context from request
        Map<String, Object> context = contextBuilder.buildContext(request);

        // Step 2: Call FDX API and get raw data
        String fdxData = fdxAdapter.fetchData(context);

        // Step 3: Call OpenAI or other model using ModelRunner
        String aiResponse = modelRunner.run(context, fdxData);

        // Step 4: Return MCP response with message and enriched context
        return new McpResponse(aiResponse, context);
    }
}

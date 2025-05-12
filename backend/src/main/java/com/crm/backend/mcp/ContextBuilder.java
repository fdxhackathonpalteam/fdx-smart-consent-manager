package com.crm.backend.mcp;

import com.crm.backend.mcp.model.McpRequest;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class ContextBuilder {

    public Map<String, Object> buildContext(McpRequest request) {
        Map<String, Object> context = new HashMap<>();

        context.put("userId", request.getUserId());
        context.put("query", request.getQuery());

        // FDX-specific hardcoded access token and account ID for now
        context.put("fdxAccessToken", "eyJraWQiOiI1YjdlZGRlNS05YTIwLTQ4YTEtYmE4Yi03NjE3MTYyM2ZkMmEiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ0ZXN0dXNlcjEiLCJhdWQiOiJzUlFOUTBJWW5CNUhaTWtzUEFXcHY3eUpGemoyMmxOWiIsIm5iZiI6MTc0NjgxOTk1MCwic2NvcGUiOlsiQUxMIl0sImlzcyI6Imh0dHBzOi8vdGRtLmZpbmFuY2lhbGRhdGFleGNoYW5nZS5vcmcvZmR4cmlhdXRoc2VydmVyIiwiZXhwIjoxNzc4MzU1OTUwLCJpYXQiOjE3NDY4MTk5NTAsImp0aSI6IjljYjNiYmMzLWEyZTItNDE3Mi1hMmU3LWZmMTlmYzhmNmYyNyJ9.MBuJCLaIvLWqOEiP58KoGMZEoHHs4zyv0AXFZ1hc66T8iFywy6FMsvkJwkB7pntlkIJ2YzNUTc2cE98w681SDf7iZf7-MH8sRVPzXdl2CgXGAXVHTuC6-Vu2FGwAYFLB7Vk_TAMn6zD9Q1TIWWQAssh_X9XxJEM1rS51aFFAcorzNE8e6pNOJ4xUe_cY_VlP5CLL9QcOCrtWJ-2K_BjmGvh7ie2eizwFm4_Lb-Dfn13w8vhJnbY_Vw5sJROCnMwxwtI-NeQI1usR8ZbWmhqv-nSf0Kw7obUc3Eotc8Cg5UtqhPmfpY1S0SIXLpP7kf5QYnuLlNu2-xnTLFqf73hgyw");
        context.put("fdxAccountId", "250225094217217-6d2ed104-f298-46a5-a946-6903d79783a4"); // Update accordingly
        context.put("prompt", request.getQuery());

        return context;
    }
}

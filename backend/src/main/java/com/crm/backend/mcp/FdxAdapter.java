package com.crm.backend.mcp;

import org.springframework.stereotype.Component;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Map;

@Component
public class FdxAdapter {

    private static final String BASE_URL = "https://financialdataexchange-prod.apigee.net/fdx-consent-api-v6.2.0"; // replace if needed

    public String fetchData(Map<String, Object> metadata) {
        try {
            String accessToken = (String) metadata.get("fdxAccessToken");
            String accountId = (String) metadata.get("fdxAccountId");

            if (accessToken == null || accountId == null) {
                return "Missing FDX access token or account ID";
            }

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(new URI(BASE_URL + "/consents/" + accountId))
                    .header("Authorization", "Bearer " + accessToken)
                    .header("Accept", "application/json")
                    .GET()
                    .build();

            HttpClient client = HttpClient.newHttpClient();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() == 200) {
                return response.body();
            } else {
                return "FDX API error: " + response.statusCode() + " - " + response.body();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "Error calling FDX API: " + e.getMessage();
        }
    }
}

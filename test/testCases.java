import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class SimpleServerTest {

    @Test
    public void testServerResponse() throws Exception {
        // Replace the URL with your server URL
        URL url = new URL("http://localhost:4000");
        
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");
        
        int responseCode = connection.getResponseCode();
        assertEquals(200, responseCode, "Expected HTTP response code 200");
        
        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        StringBuilder response = new StringBuilder();
        String inputLine;
        
        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();
        
        // Replace "Hello, world!" with the expected response from your server
        assertEquals("Hello, world!\n", response.toString(), "Unexpected server response");
    }
}

using Microsoft.AspNetCore.Mvc;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WaifuController : ControllerBase
{
    private const string SFW_WAIFU_URL = "https://api.waifu.pics/sfw/waifu";

    private readonly HttpClient _httpClient;

    public WaifuController(IHttpClientFactory httpClientFactory)
    {
        _httpClient = httpClientFactory.CreateClient();
    }

    [HttpGet]
    public async Task<IActionResult> GetWaifu()
    {
        var response = await _httpClient.GetAsync(SFW_WAIFU_URL);

        if (response.IsSuccessStatusCode)
        {
            var content = await response.Content.ReadAsStringAsync();

            return Ok(content);
        }

        return StatusCode((int)response.StatusCode, "Error fetching waifu api");
    }
}
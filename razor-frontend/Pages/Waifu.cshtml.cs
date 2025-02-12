using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

using System.Text.Json;

namespace razor_frontend.Pages;

public class WaifuModel : PageModel
{
    private readonly HttpClient _httpClient;

    private const string URL_API = "http://localhost:5100/api/waifu";

    public WaifuModel(IHttpClientFactory httpClientFactory)
    {
        _httpClient = httpClientFactory.CreateClient();
    }

    [BindProperty]
    public string WaifuUrl { get; set; } = default!;

    public async Task<IActionResult> OnPostFetchWaifuAsync()
    {
        // var response = await _httpClient.GetAsync(URL_API);

        // if (response.IsSuccessStatusCode)
        // {
        //     var content = await response.Content.ReadAsStringAsync();
        //     var waifuResponse = JsonSerializer.Deserialize<WaifuResponse>(content, new JsonSerializerOptions
        //     {
        //         PropertyNameCaseInsensitive = true
        //     });

        //     if (waifuResponse != null && !string.IsNullOrEmpty(waifuResponse.Url))
        //     {
        //         WaifuUrl = waifuResponse.Url;
        //     }
        //     else
        //     {
        //         WaifuUrl = default!;
        //     }
        // }
        // else
        // {
        //     WaifuUrl = default!;
        // }

        WaifuUrl = "https://i.waifu.pics/BwHGNNK.png";

        return Page();
    }

    private class WaifuResponse
    {
        public string Url { get; set; } = default!;
    }
}
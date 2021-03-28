import kotlinx.coroutines.*
import org.w3c.fetch.CORS
import org.w3c.fetch.RequestInit
import org.w3c.fetch.RequestMode
import org.w3c.fetch.Response
import kotlin.js.Promise
import kotlin.js.json

@JsNonModule
@JsModule("node-fetch")
external fun fetch(input: dynamic, init: RequestInit = definedExternally): Promise<Response>

const val DISCORD_URL = "https://discord.com/api/webhooks/tokenHere"
const val STATE_CODE = "MN"
const val ZIP_CODE = "66011"
const val RADIUS = "25"

fun main() {
    GlobalScope.launch {
        while(true) {
            val response: dynamic = fetch(
                "https://www.vaccinespotter.org/api/v0/states/$STATE_CODE.json", RequestInit(
                    headers = json(
                        "accept" to "*/*",
                        "accept-language" to "en-US,en-GB;q=0.9,en;q=0.8",
                        "if-modified-since" to "Sun, 28 Mar 2021 19:23:01 GMT",
                        "if-none-match" to "W/\"431c895b3326f952124205fe4051dd08\"",
                        "sec-fetch-dest" to "empty",
                        "sec-fetch-mode" to "cors",
                        "sec-fetch-site" to "same-origin",
                        "sec-gpc" to "1",
                        "cookie" to "__cfduid=dbc2e6f634d64033ebf1041688acfd4981616959422"
                    ),
                    referrer = "https://www.vaccinespotter.org/$STATE_CODE/?zip=$ZIP_CODE&radius=$RADIUS",
                    referrerPolicy = "strict-origin-when-cross-origin",
                    body = null,
                    method = "GET",
                    mode = RequestMode.CORS
                )
            ).await()
                .json()
                .await()

            response.features.unsafeCast<Array<dynamic>>()
                .asSequence()
                .map { it.properties }
                .filter { it.appointments_available == true }
                .forEach {
                    println("found vaccines")
                        fetch(DISCORD_URL,
                            RequestInit(
                                method = "POST",
                                headers = json("Content-type" to "application/json"),
                                body = JSON.stringify(json("content" to """
                        💉 Vaccine Available 💉 
                        ${it.name}
                        ${it.address}
                        ${it.city} ${it.state}
                        ${it.url}
                        
                        """.trimIndent()))
                            )).await()
                }
            delay(1000 * 60)
        }
    }
}

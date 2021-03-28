plugins {
    kotlin("js") version "1.4.31"
}

group = "cash.andrew"
version = "1.0-SNAPSHOT"

repositories {
    jcenter()
    mavenCentral()
}

dependencies {
    implementation("org.jetbrains.kotlinx:kotlinx-nodejs:0.0.7")
    implementation(npm("node-fetch", "2.6.1"))
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:1.4.3")
}

kotlin {
    js(IR) {
        nodejs {
            binaries.executable()
        }
    }
}

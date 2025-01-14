package com.example.reactnativedidomi

import androidx.test.ext.junit.rules.ActivityScenarioRule
import androidx.test.filters.LargeTest
import androidx.test.internal.runner.junit4.AndroidJUnit4ClassRunner
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4ClassRunner::class)
@LargeTest
class UIGettersParamsTest: BaseUITest() {

    @get:Rule
    var activityRule: ActivityScenarioRule<MainActivity> = ActivityScenarioRule(MainActivity::class.java)

    @Before
    fun init() {
        waitForSdkToBeReady()
    }

    //TODO FIND A WAY TO CHECK WITHOUT THE ID HARD SET
    @Test
    fun test_GetPurpose() {

        tapButton("getPurpose [ID = 'cookies']")

        // Android doesn't always keep the same order for the properties.
        assertTextContains("\"iabId\":\"1\"")
        assertTextContains("\"description\":\"Cookies, device identifiers, or other information can be stored or accessed on your device for the purposes presented to you.\"")
        assertTextContains("\"name\":\"Store and/or access information on a device\"")
        assertTextContains("\"id\":\"cookies\"")
        assertTextContains("\"descriptionLegal\":\"Vendors can:\\n* Store and access information on the device such as cookies and device identifiers presented to a user.\"")
    }

    @Test
    fun test_GetPurpose_descriptionLegal() {

        tapButton("getPurpose [ID = 'cookies'] descriptionLegal")

        assertText("\"Vendors can:\\n* Store and access information on the device such as cookies and device identifiers presented to a user.\"")
    }

    @Test
    fun test_GetVendor() {

        tapButton("getVendor [ID = '755']")

        // Android doesn't always keep the same order for the properties.
        assertTextContains("\"specialPurposes\":[\"1\",\"2\"]")
        assertTextContains("\"features\":[\"1\",\"2\"]")
        assertTextContains("\"policyUrl\":\"https://policies.google.com/privacy\"")
        assertTextContains("\"deviceStorageDisclosureUrl\":\"https://www.gstatic.com/iabtcf/deviceStorageDisclosure.json\"")
        assertTextContains("\"name\":\"Google Advertising Products\"")
        assertTextContains("\"id\":\"google\"")
        assertTextContains("\"iabId\":\"755\"")
        assertTextContains("\"namespace\":\"didomi\"")
        assertTextContains("\"namespaces\":{\"iab2\":\"755\"}")
        assertTextContains("\"usesNonCookieAccess\":\"true\"")
        assertTextContains("\"purposes\":[\"cookies\",\"create_ads_profile\",")
    }

    @Test
    fun test_GetPurpose_policyUrl() {

        tapButton("getVendor [ID = '755'] policyUrl")

        assertText("\"https://policies.google.com/privacy\"")
    }

    @Test
    fun test_GetText() {
        tapButton("getText [Key = '0']")
        assertText("{}")
    }

    @Test
    fun test_GetTranslatedText() {
        tapButton("getTranslatedText [Key = '0']")
        assertText("\"0\"")
    }

    @Test
    fun test_GetUserConsentStatusForPurpose() {
        agreeToAll()

        tapButton("getUserConsentStatusForPurpose [ID = 'cookies']")
        assertText("true")
    }

    @Test
    fun test_GetUserConsentStatusForVendor() {
        agreeToAll()

        tapButton("getUserConsentStatusForVendor [ID = '755']")
        assertText("true")
    }

    @Test
    fun test_GetUserConsentStatusForVendorAndRequiredPurposes() {
        agreeToAll()

        tapButton("getUserConsentStatusForVendorAndRequiredPurposes [ID = '755']")
        assertText("true")
    }

    @Test
    fun test_GetEnabledVendors() {
        agreeToAll()

        tapButton("getUserLegitimateInterestStatusForPurpose [ID = 'cookies']")
        assertText("true")
    }

    @Test
    fun test_GetJavaScriptForWebViewWithExtra() {
        tapButton("getJavaScriptForWebViewWithExtra")

        // Asserting the whole string can be tricky so we just assert the end of it.
        val expected = "console.log('extra JS!');});\"".trim()

        // There might be a delay to get this string.
        Thread.sleep(1_000L)
        assertTextEndsWith(expected)
    }
}

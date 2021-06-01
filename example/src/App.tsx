import React, { useState } from 'react'

import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
} from 'react-native'
import { Didomi, DidomiEventType } from 'react-native-didomi'

export default function App () {
  const [result, setResult] = useState('')
  const [logLevel, setLogLevel] = useState(0)
  const [languageCode, setLanguageCode] = useState('fr')
  const [vendorId, setVendorId] = useState('')
  const [purposeId, setPurposeId] = useState('')
  const [key, setKey] = useState('')
  const [event, setEventKey] = useState('')

  React.useEffect(() => {

    Didomi.initialize('', '', '', '', true);

    Didomi.addEventListener(DidomiEventType.READY, () => {
      console.log("I'm ready");
    });

    //var strCallback = () : void => { console.log('Didomi init OK'); };
    //Didomi.onReady(strCallback)
    //Didomi.onError(function () {Log.d("App", "KO");})
    //Didomi.initialize("465ca0b2-b96f-43b4-a864-f87e18d2fd38", null, null, null, false).then(setResult);
  }, [])

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>

      <View>
        <Text>vendorId</Text>
        <TextInput
          style={styles.input}
          onChangeText={setVendorId}
          value={vendorId}
          accessibilityIdentifier='Test'
          placeholder={'vendorId'}
        />

        <Text>purposeId</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPurposeId}
          value={purposeId}
          placeholder={'purposeId'}
        />

        <Text>key</Text>
        <TextInput
          style={styles.input}
          onChangeText={setKey}
          value={key}
          placeholder={'key'}
        />

        <Text>event</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEventKey}
          value={event}
          placeholder={'event'}
        />
      </View>

      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.showNotice()
            }}
            title='Show Notice'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.setupUI()
            }}
            title='setupUI'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.setLogLevel(logLevel)
              if (logLevel < 4) setLogLevel(logLevel + 1)
              else setLogLevel(0)
            }}
            title={'Set log level to ' + logLevel}
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#0a0'}
            onPress={() => {
              Didomi.addEventListener(event)
            }}
            title='Add event listener [NEED EVENT]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#0a0'}
            onPress={() => {
              Didomi.removeEventListener(event)
            }}
            title='Remove event listener [NEED EVENT]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              setResult(Didomi.getDisabledPurposes())
            }}
            title='Get Disabled Purposes'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              setResult(Didomi.getDisabledPurposeIds())
            }}
            title='Get Disabled PurposeIds'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              setResult(Didomi.getDisabledVendors())
            }}
            title='Get Disabled Vendors'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              setResult(Didomi.getDisabledVendorIds())
            }}
            title='Get Disabled VendorIds'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              setResult(Didomi.getEnabledPurposes())
            }}
            title='Get Enabled Purposes'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              setResult(Didomi.getEnabledPurposeIds())
            }}
            title='Get Enabled PurposeIds'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              setResult(Didomi.getEnabledVendors())
            }}
            title='Get Enabled Vendors'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              setResult(Didomi.getEnabledVendorIds())
            }}
            title='Get Enabled VendorIds'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              setResult(Didomi.getJavaScriptForWebView())
            }}
            title='Get JavaScript For WebView'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.getQueryStringForWebView()
            }}
            title='Get Query String For WebView'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#f70'}
            onPress={() => {
              Didomi.getPurpose(purposeId)
            }}
            title='Get Purpose [NEED PURPOSEID]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.getRequiredPurposes()
            }}
            title='Get Required Purposes'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.getRequiredPurposeIds()
            }}
            title='Get Required PurposeIds'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.getRequiredVendors()
            }}
            title='Get Required Vendors'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.getRequiredVendorIds()
            }}
            title='Get Required VendorIds'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#f70'}
            onPress={() => {
              Didomi.getText(key)
            }}
            title='Get Text [NEEDS KEY]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#f70'}
            onPress={() => {
              Didomi.getTranslatedText(key)
            }}
            title='Get Translated Text [NEED KEY]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#f70'}
            onPress={() => {
              Didomi.getUserConsentStatusForPurpose(purposeId)
            }}
            title='Get User Consent Status For Purpose [NEED PURPOSEID]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#f70'}
            onPress={() => {
              Didomi.getUserConsentStatusForVendor(vendorId)
            }}
            title='Get User Consent Status For Vendor [NEED VENDORID]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#f70'}
            onPress={() => {
              Didomi.getUserConsentStatusForVendorAndRequiredPurposes(vendorId)
            }}
            title='Get User Consent Status For Vendor And Required Purposes [NEED VENDORID]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#f70'}
            onPress={() => {
              Didomi.getUserLegitimateInterestStatusForPurpose(purposeId)
            }}
            title='Get User Legitimate Interest Status For Purpose [NEED PURPOSEID]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#f70'}
            onPress={() => {
              Didomi.getUserLegitimateInterestForVendor(vendorId)
            }}
            title='Get User Legitimate Interest For Vendor [NEED VENDORID]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#f70'}
            onPress={() => {
              Didomi.getUserLegitimateInterestStatusForVendorAndRequiredPurposes(
                vendorId
              )
            }}
            title='Get User Legitimate Interest Status For Vendor And Required Purposes [NEED VENDORID]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#f70'}
            onPress={() => {
              Didomi.getUserStatusForVendor(vendorId)
            }}
            title='Get User Status For Vendor [NEED VENDORID]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#f70'}
            onPress={() => {
              Didomi.getVendor(vendorId)
            }}
            title='Get Vendor [NEED VENDORID]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.hideNotice()
            }}
            title='Hide Notice'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.hidePreferences()
            }}
            title='HidePreferences'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.isConsentRequired()
            }}
            title='Is Consent Required'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.isUserConsentStatusPartial()
            }}
            title='Is User Consent Status Partial'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.isNoticeVisible()
            }}
            title='Is Notice Visible'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.isPreferencesVisible()
            }}
            title='Is Preferences Visible'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.isError()
            }}
            title='Is Error'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.isReady()
            }}
            title='Is Ready'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#f00'}
            onPress={() => {
              Didomi.onError(callable)
            }}
            title='On Error [NEED CALLABLE]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#f00'}
            onPress={() => {
              Didomi.onReady(callable)
            }}
            title='On Ready [NEED CALLABLE]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#a00'}
            onPress={() => {
              Didomi.setUser(
                organizationUserId,
                organizationUserIdAuthAlgorithm,
                organizationUserIdAuthSid,
                organizationUserIdAuthSalt,
                organizationUserIdAuthDigest
              )
            }}
            title='Set User [NEED A LOT]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#f00'}
            onPress={() => {
              Didomi.showPreferences(view)
            }}
            title='Show Preferences [NEED VIEW]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.reset()
            }}
            title='Reset'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.setUserAgreeToAll()
            }}
            title='Set User Agree To All'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#a00'}
            onPress={() => {
              Didomi.setUserConsentStatus(
                enabledPurposeIds,
                disabledPurposeIds,
                enabledLegitimatePurposeIds,
                disabledLegitimatePurposeIds,
                enabledVendorIds,
                disabledVendorIds,
                enabledLegIntVendorIds,
                disabledLegIntVendorIds
              )
            }}
            title='setUserConsentStatus [NEED A LOT]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.setUserDisagreeToAll()
            }}
            title='Set User Disagree To All'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#a00'}
            onPress={() => {
              Didomi.setUserStatus(
                purposesConsentStatus,
                purposesLIStatus,
                vendorsConsentStatus,
                vendorsLIStatus
              )
            }}
            title='Set User Status [NEED A LOT]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            color={'#a00'}
            onPress={() => {
              Didomi.setUserStatusSets(
                enabledConsentPurposeIds,
                disabledConsentPurposeIds,
                enabledLIPurposeIds,
                disabledLIPurposeIds,
                enabledConsentVendorIds,
                disabledConsentVendorIds,
                enabledLIVendorIds,
                disabledLIVendorIds,
                sendAPIEvent
              )
            }}
            title='Set User Status Sets [NEED A LOT]'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.shouldConsentBeCollected()
            }}
            title='Should Consent Be Collected'
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            onPress={() => {
              Didomi.updateSelectedLanguage(languageCode)
              if (languageCode === 'fr') setLanguageCode('es')
              else if (languageCode === 'es') setLanguageCode('en')
              else setLanguageCode('fr')
            }}
            title={'Update Selected Language to ' + languageCode}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
})

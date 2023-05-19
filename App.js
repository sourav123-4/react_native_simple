import react, {useEffect} from 'react';
import {Button, View, Linking, Alert} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

export async function openLink(urlToOpen, color) {
  try {
    const url = urlToOpen;
    if (await InAppBrowser.isAvailable()) {
      await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#453AA4',
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: color,
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animatiUserTileon bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
        headers: {
          'my-custom-header': 'my custom header value',
        },
      });
    } else Linking.openURL(url);
  } catch (error) {
    Alert.alert(error.message);
  }
}
function App() {
  const openWebView = () => {
    openLink(
      `https://www.npmjs.com/package/react-native-inappbrowser-reborn?activeTab=readme`,
      `#2A867A`,
    );
  };
  useEffect(() => {
    console.log('App running');
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Button onPress={() => openWebView()} title="Open Webview" />
      </View>
    </View>
  );
}
export default App;

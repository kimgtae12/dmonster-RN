## 스플래쉬

### 안드로이드

시작하기 전 splash 이미지가 필요합니다.

- 생성해둔 splash 이미지를 **'android/app/src/main/res/drawable~'** 폴더에 넣어줍니다.

  - drawable-ldpi
  - drawable-mdpi
  - drawable-hdpi
  - drawable-xhdpi
  - drawable-xxhdpi
  - drawable-xxxhdpi

위에 있는 폴더를 추가 후 사이즈에 맞는 이미지를 넣어줍니다.

- `yarn add react-native-splash-screen 또는 npm i react-native-splash-screen`를 하여 라이브러리를 사용합니다.

  [참고] https://github.com/crazycodeboy/react-native-splash-screen

- 설치 후 **'android/app/src/main/res'** 경로에 **layout** 폴더를 만들고 그안에 **launch_screen.xml**파일을 만들어 아래 코드를 입력합니다.

```
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <ImageView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:contentDescription="Splashscreen"
        android:scaleType="centerCrop"
        android:background="@color/splashprimary"
        android:src="@drawable/splashscreen"/>
</RelativeLayout>
```

- **'/android/src/main/res/drawable'** 경로에 **splashscreen.xml** 파일을 만들어 아래 내용을 추가합니다.

```
<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">

    <item android:drawable="@color/splashprimary" />
    <item>
        <bitmap
                android:gravity="center"
                android:src="@drawable/splash_image" />
    </item>

</layer-list>

```

- 여기서 주의할 점은 android:src="@drawable/splash_image"에 쓰인 splash_image과 실제 drawable 폴더에 넣었던 이미지 파일의 이름이 같아야 한다는 것입니다.

- **/app/src/main/java/com/[프로젝트이름]/MainActivity.java** 에서 onCreat함수를 추가해줍니다.

```
import android.os.Bundle; // here
import com.facebook.react.ReactActivity;
// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {
   @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
    // ...other code
}
```

- **'/app/src/main/res/values** 안에 colors.xml을 생성한 후 아래 코드를 추가해주세요.

```
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="splashprimary">#FFFFFF</color>
</resources>
```

- app.tsx에 아래 코드를 추가해주세요.

```
useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide(); /** 추가 **/
      }, 2000); /** 스플래시 시간 조절 (2초) **/
    } catch (e) {
      console.warn('에러발생');
      console.warn(e);
    }
  });
```

## 앱 아이콘

### 안드로이드 

- 먼저 1024x1024 사이즈의 이미지를 준비 해 줍니다.

- 안드로이드 스튜디오를 열어 해당 폴더의 android 폴더를 열어줍니다.

- ```[projectName]/app/res``` 폴더에서 마우스 우클릭하여 New > imageAsset 을 실행시켜줍니다.

- Source Asset에서 준비해둔 이미지를 찾아 열어주고 'Next'버튼을 클릭합니다. 

- Res Directory에서 release / main / debug 각각 실행시켜줍니다.
    11-13 21:08:42.244 26248-26248/com.spv.babaimile.fruitsearchwithpic E/AndroidRuntime: FATAL EXCEPTION: main&#xD;&#xA;                                                                                         Process: com.spv.babaimile.fruitsearchwithpic, PID: 26248&#xD;&#xA;                                                                                         java.lang.RuntimeException: Unable to instantiate activity ComponentInfo{com.spv.babaimile.fruitsearchwithpic/com.spv.babaimile.fruitsearchwithpic.MainActivity}: java.lang.NullPointerException: Attempt to invoke virtual method 'android.content.res.Resources android.content.Context.getResources()' on a null object reference&#xD;&#xA;                                                                                             at android.app.ActivityThread.performLaunchActivity(ActivityThread.java:2548)&#xD;&#xA;                                                                                             at android.app.ActivityThread.handleLaunchActivity(ActivityThread.java:2707)&#xD;&#xA;                                                                                             at android.app.ActivityThread.-wrap12(ActivityThread.java)&#xD;&#xA;                                                                                             at android.app.ActivityThread$H.handleMessage(ActivityThread.java:1460)&#xD;&#xA;                                                                                             at android.os.Handler.dispatchMessage(Handler.java:102)&#xD;&#xA;                                                                                             at android.os.Looper.loop(Looper.java:154)&#xD;&#xA;                                                                                             at android.app.ActivityThread.main(ActivityThread.java:6077)&#xD;&#xA;                                                                                             at java.lang.reflect.Method.invoke(Native Method)&#xD;&#xA;                                                                                             at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:865)&#xD;&#xA;                                                                                             at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:755)&#xD;&#xA;                                                                                          Caused by: java.lang.NullPointerException: Attempt to invoke virtual method 'android.content.res.Resources android.content.Context.getResources()' on a null object reference&#xD;&#xA;                                                                                             at android.content.ContextWrapper.getResources(ContextWrapper.java:86)&#xD;&#xA;                                                                                             at android.view.ContextThemeWrapper.getResourcesInternal(ContextThemeWrapper.java:127)&#xD;&#xA;                                                                                             at android.view.ContextThemeWrapper.getResources(ContextThemeWrapper.java:121)&#xD;&#xA;                                                                                             at com.spv.babaimile.fruitsearchwithpic.MainActivity.<init>(MainActivity.java:22)&#xD;&#xA;                                                                                             at java.lang.Class.newInstance(Native Method)&#xD;&#xA;                                                                                             at android.app.Instrumentation.newActivity(Instrumentation.java:1078)&#xD;&#xA;                                                                                             at android.app.ActivityThread.performLaunchActivity(ActivityThread.java:2538)&#xD;&#xA;                                                                                             at android.app.ActivityThread.handleLaunchActivity(ActivityThread.java:2707) &#xD;&#xA;                                                                                             at android.app.ActivityThread.-wrap12(ActivityThread.java) &#xD;&#xA;                                                                                             at android.app.ActivityThread$H.handleMessage(ActivityThread.java:1460) &#xD;&#xA;                                                                                             at android.os.Handler.dispatchMessage(Handler.java:102) &#xD;&#xA;                                                                                             at android.os.Looper.loop(Looper.java:154) &#xD;&#xA;                                                                                             at android.app.ActivityThread.main(ActivityThread.java:6077) &#xD;&#xA;                                                                                             at java.lang.reflect.Method.invoke(Native Method) &#xD;&#xA;                                                                                             at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:865) &#xD;&#xA;                                                                                             at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:755) 
    [error] java.io.IOException: Cannot run program "docker" (in directory "C:\Users\A674634\Desktop\Scala\playProjects\akka-cluster-playground\target\docker\stage"): CreateProcess error=2, The system cannot find the file specified&#xD;&#xA;    [error]         at java.lang.ProcessBuilder.start(ProcessBuilder.java:1048)&#xD;&#xA;    [error]         at scala.sys.process.ProcessBuilderImpl$Simple.run(ProcessBuilderImpl.scala:71)&#xD;&#xA;    [error]         at scala.sys.process.ProcessBuilderImpl$AbstractBuilder.run(ProcessBuilderImpl.scala:102)&#xD;&#xA;    [error]         at scala.sys.process.ProcessBuilderImpl$AbstractBuilder.$anonfun$runBuffered$1(ProcessBuilderImpl.scala:150)&#xD;&#xA;    [error]         at scala.runtime.java8.JFunction0$mcI$sp.apply(JFunction0$mcI$sp.java:12)&#xD;&#xA;    [error]         at com.typesafe.sbt.packager.docker.DockerPlugin$$anon$1.buffer(DockerPlugin.scala:348)&#xD;&#xA;    [error]         at scala.sys.process.ProcessBuilderImpl$AbstractBuilder.runBuffered(ProcessBuilderImpl.scala:150)&#xD;&#xA;    [error]         at scala.sys.process.ProcessBuilderImpl$AbstractBuilder.$bang(ProcessBuilderImpl.scala:116)&#xD;&#xA;    [error]         at com.typesafe.sbt.packager.docker.DockerPlugin$.publishLocalDocker(DockerPlugin.scala:355)&#xD;&#xA;    [error]         at com.typesafe.sbt.packager.docker.DockerPlugin$.$anonfun$projectSettings$30(DockerPlugin.scala:127)&#xD;&#xA;    [error]         at com.typesafe.sbt.packager.docker.DockerPlugin$.$anonfun$projectSettings$30$adapted(DockerPlugin.scala:125)&#xD;&#xA;    [error]         at scala.Function1.$anonfun$compose$1(Function1.scala:44)&#xD;&#xA;    [error]         at sbt.internal.util.$tilde$greater.$anonfun$$u2219$1(TypeFunctions.scala:40)&#xD;&#xA;    [error]         at sbt.std.Transform$$anon$4.work(System.scala:67)&#xD;&#xA;    [error]         at sbt.Execute.$anonfun$submit$2(Execute.scala:269)&#xD;&#xA;    [error]         at sbt.internal.util.ErrorHandling$.wideConvert(ErrorHandling.scala:16)&#xD;&#xA;    [error]         at sbt.Execute.work(Execute.scala:278)&#xD;&#xA;    [error]         at sbt.Execute.$anonfun$submit$1(Execute.scala:269)&#xD;&#xA;    [error]         at sbt.ConcurrentRestrictions$$anon$4.$anonfun$submitValid$1(ConcurrentRestrictions.scala:178)&#xD;&#xA;    [error]         at sbt.CompletionService$$anon$2.call(CompletionService.scala:37)&#xD;&#xA;    [error]         at java.util.concurrent.FutureTask.run(FutureTask.java:266)&#xD;&#xA;    [error]         at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)&#xD;&#xA;    [error]         at java.util.concurrent.FutureTask.run(FutureTask.java:266)&#xD;&#xA;    [error]         at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)&#xD;&#xA;    [error]         at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)&#xD;&#xA;    [error]         at java.lang.Thread.run(Thread.java:748)&#xD;&#xA;    [error] Caused by: java.io.IOException: CreateProcess error=2, The system cannot find the file specified&#xD;&#xA;    [error]         at java.lang.ProcessImpl.create(Native Method)&#xD;&#xA;    [error]         at java.lang.ProcessImpl.<init>(ProcessImpl.java:386)&#xD;&#xA;    [error]         at java.lang.ProcessImpl.start(ProcessImpl.java:137)&#xD;&#xA;    [error]         at java.lang.ProcessBuilder.start(ProcessBuilder.java:1029)&#xD;&#xA;    [error]         at scala.sys.process.ProcessBuilderImpl$Simple.run(ProcessBuilderImpl.scala:71)&#xD;&#xA;    [error]         at scala.sys.process.ProcessBuilderImpl$AbstractBuilder.run(ProcessBuilderImpl.scala:102)&#xD;&#xA;    [error]         at scala.sys.process.ProcessBuilderImpl$AbstractBuilder.$anonfun$runBuffered$1(ProcessBuilderImpl.scala:150)&#xD;&#xA;    [error]         at scala.runtime.java8.JFunction0$mcI$sp.apply(JFunction0$mcI$sp.java:12)&#xD;&#xA;    [error]         at com.typesafe.sbt.packager.docker.DockerPlugin$$anon$1.buffer(DockerPlugin.scala:348)&#xD;&#xA;    [error]         at scala.sys.process.ProcessBuilderImpl$AbstractBuilder.runBuffered(ProcessBuilderImpl.scala:150)&#xD;&#xA;    [error]         at scala.sys.process.ProcessBuilderImpl$AbstractBuilder.$bang(ProcessBuilderImpl.scala:116)&#xD;&#xA;    [error]         at com.typesafe.sbt.packager.docker.DockerPlugin$.publishLocalDocker(DockerPlugin.scala:355)&#xD;&#xA;    [error]         at com.typesafe.sbt.packager.docker.DockerPlugin$.$anonfun$projectSettings$30(DockerPlugin.scala:127)&#xD;&#xA;    [error]         at com.typesafe.sbt.packager.docker.DockerPlugin$.$anonfun$projectSettings$30$adapted(DockerPlugin.scala:125)&#xD;&#xA;    [error]         at scala.Function1.$anonfun$compose$1(Function1.scala:44)&#xD;&#xA;    [error]         at sbt.internal.util.$tilde$greater.$anonfun$$u2219$1(TypeFunctions.scala:40)&#xD;&#xA;    [error]         at sbt.std.Transform$$anon$4.work(System.scala:67)&#xD;&#xA;    [error]         at sbt.Execute.$anonfun$submit$2(Execute.scala:269)&#xD;&#xA;    [error]         at sbt.internal.util.ErrorHandling$.wideConvert(ErrorHandling.scala:16)&#xD;&#xA;    [error]         at sbt.Execute.work(Execute.scala:278)&#xD;&#xA;    [error]         at sbt.Execute.$anonfun$submit$1(Execute.scala:269)&#xD;&#xA;    [error]         at sbt.ConcurrentRestrictions$$anon$4.$anonfun$submitValid$1(ConcurrentRestrictions.scala:178)&#xD;&#xA;    [error]         at sbt.CompletionService$$anon$2.call(CompletionService.scala:37)&#xD;&#xA;    [error]         at java.util.concurrent.FutureTask.run(FutureTask.java:266)&#xD;&#xA;    [error]         at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)&#xD;&#xA;    [error]         at java.util.concurrent.FutureTask.run(FutureTask.java:266)&#xD;&#xA;    [error]         at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)&#xD;&#xA;    [error]         at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)&#xD;&#xA;    [error]         at java.lang.Thread.run(Thread.java:748)&#xD;&#xA;    [IJ]sbt:akka-cluster-playground> [error] (Docker / publishLocal) java.io.IOException: Cannot run program "docker" (in directory "C:\Users\A674634\Desktop\Scala\playProjects\akka-cluster-playground\target\docker\stage"): CreateProcess error=2, The system cannot find the file specified
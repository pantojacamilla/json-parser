    log4j:WARN No appenders could be found for logger (org.hibernate.cfg.Environment).&#xD;&#xA;    log4j:WARN Please initialize the log4j system properly.&#xD;&#xA;    Hibernate: select employee0_.EMPNO as EMPNO0_0_, employee0_.ename as ename0_0_, employee0_.mgr as mgr0_0_, employee0_.deptno as deptno0_0_, employee0_.job as job0_0_, employee0_.sal as sal0_0_, employee0_.comm as comm0_0_, employee0_.hiredate as hiredate0_0_ from emp employee0_ where employee0_.EMPNO=?&#xD;&#xA;    Exception in thread "main" org.hibernate.PropertyAccessException: exception setting property value with CGLIB (set hibernate.cglib.use_reflection_optimizer=false for more info) setter of com.raj.java.hiberanteDemos.Employee.setMgr&#xD;&#xA;    	at org.hibernate.tuple.PojoEntityTuplizer.setPropertyValuesWithOptimizer(PojoEntityTuplizer.java:215)&#xD;&#xA;    	at org.hibernate.tuple.PojoEntityTuplizer.setPropertyValues(PojoEntityTuplizer.java:185)&#xD;&#xA;    	at org.hibernate.persister.entity.AbstractEntityPersister.setPropertyValues(AbstractEntityPersister.java:3232)&#xD;&#xA;    	at org.hibernate.engine.TwoPhaseLoad.initializeEntity(TwoPhaseLoad.java:129)&#xD;&#xA;    	at org.hibernate.loader.Loader.initializeEntitiesAndCollections(Loader.java:842)&#xD;&#xA;    	at org.hibernate.loader.Loader.doQuery(Loader.java:717)&#xD;&#xA;    	at org.hibernate.loader.Loader.doQueryAndInitializeNonLazyCollections(Loader.java:224)&#xD;&#xA;    	at org.hibernate.loader.Loader.loadEntity(Loader.java:1785)&#xD;&#xA;    	at org.hibernate.loader.entity.AbstractEntityLoader.load(AbstractEntityLoader.java:47)&#xD;&#xA;    	at org.hibernate.loader.entity.AbstractEntityLoader.load(AbstractEntityLoader.java:41)&#xD;&#xA;    	at org.hibernate.persister.entity.AbstractEntityPersister.load(AbstractEntityPersister.java:2730)&#xD;&#xA;    	at org.hibernate.event.def.DefaultLoadEventListener.loadFromDatasource(DefaultLoadEventListener.java:365)&#xD;&#xA;    	at org.hibernate.event.def.DefaultLoadEventListener.doLoad(DefaultLoadEventListener.java:346)&#xD;&#xA;    	at org.hibernate.event.def.DefaultLoadEventListener.load(DefaultLoadEventListener.java:123)&#xD;&#xA;    	at org.hibernate.event.def.DefaultLoadEventListener.proxyOrLoad(DefaultLoadEventListener.java:177)&#xD;&#xA;    	at org.hibernate.event.def.DefaultLoadEventListener.onLoad(DefaultLoadEventListener.java:87)&#xD;&#xA;    	at org.hibernate.impl.SessionImpl.fireLoad(SessionImpl.java:862)&#xD;&#xA;    	at org.hibernate.impl.SessionImpl.get(SessionImpl.java:799)&#xD;&#xA;    	at org.hibernate.impl.SessionImpl.get(SessionImpl.java:792)&#xD;&#xA;    	at com.raj.java.hiberanteDemos.FetchTest.main(FetchTest.java:13)&#xD;&#xA;    Caused by: net.sf.cglib.beans.BulkBeanException&#xD;&#xA;    	at com.raj.java.hiberanteDemos.Employee$$BulkBeanByCGLIB$$142cfd75.setPropertyValues(<generated>)&#xD;&#xA;    	at org.hibernate.tuple.PojoEntityTuplizer.setPropertyValuesWithOptimizer(PojoEntityTuplizer.java:212)&#xD;&#xA;    	... 19 more&#xD;&#xA;    Caused by: java.lang.NullPointerException&#xD;&#xA;    	... 21 more
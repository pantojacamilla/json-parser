    <beans xmlns:context="http://www.springframework.org/schema/context"&#xD;&#xA;           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"&#xD;&#xA;           xmlns:cache="http://www.springframework.org/schema/cache"&#xD;&#xA;           xmlns="http://www.springframework.org/schema/beans" xsi:schemaLocation=&#xD;&#xA;                   "http://www.springframework.org/schema/beans&#xD;&#xA;                   http://www.springframework.org/schema/beans/spring-beans-4.0.xsd&#xD;&#xA;            http://www.springframework.org/schema/context&#xD;&#xA;            http://www.springframework.org/schema/context/spring-context-4.0.xsd&#xD;&#xA;             http://www.springframework.org/schema/cache http://www.springframework.org/schema/cache/spring-cache.xsd">&#xD;&#xA;        <context:annotation-config/>&#xD;&#xA;        <context:component-scan base-package="com.vse.uslugi"/>&#xD;&#xA;        <cache:annotation-driven key-generator="enhancedDefaultKeyGenerator"/>&#xD;&#xA;        <bean id="enhancedDefaultKeyGenerator" class="...utilities.generators.EnhancedDefaultKeyGenerator"/>....&#xD;&#xA;           <dependency>&#xD;&#xA;                <groupId>net.sf.ehcache</groupId>&#xD;&#xA;                <artifactId>ehcache</artifactId>&#xD;&#xA;                <version>2.9.0</version>&#xD;&#xA;                <scope>provided</scope>&#xD;&#xA;            </dependency
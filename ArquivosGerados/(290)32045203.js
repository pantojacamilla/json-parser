    package my.package;&#xD;&#xA;    import org.springframework.beans.factory.annotation.Autowired;&#xD;&#xA;    import org.springframework.core.io.ClassPathResource;&#xD;&#xA;    import org.springframework.ws.client.WebServiceClientException;&#xD;&#xA;    import org.springframework.ws.client.WebServiceFaultException;&#xD;&#xA;    import org.springframework.ws.client.support.interceptor.ClientInterceptor;&#xD;&#xA;    import org.springframework.ws.context.MessageContext;&#xD;&#xA;    import org.springframework.ws.soap.saaj.SaajSoapMessage;&#xD;&#xA;    import org.springframework.ws.soap.security.xwss.XwsSecurityInterceptor;&#xD;&#xA;    import javax.security.auth.callback.CallbackHandler;&#xD;&#xA;    import javax.xml.soap.SOAPMessage;&#xD;&#xA;    public class FvsOutInterceptor implements ClientInterceptor {&#xD;&#xA;        @Autowired&#xD;&#xA;        protected XwsSecurityInterceptor xwsSecurityInterceptor;&#xD;&#xA;        @Autowired&#xD;&#xA;        private FvsRemoteKeyStoreCallbackHandler fvsKeyStoreHandler;&#xD;&#xA;        @Override&#xD;&#xA;        public boolean handleRequest(MessageContext messageContext) throws WebServiceClientException {&#xD;&#xA;            SOAPMessage soapMessage = getSaajRequestFrom(messageContext);&#xD;&#xA;            return processFvsEbms3Request(soapMessage, messageContext);&#xD;&#xA;        }&#xD;&#xA;        private boolean processFvsEbms3Request(SOAPMessage soapMessage, MessageContext messageContext) {&#xD;&#xA;            insertSAMLTokenIntoWebServiceSecurityHeader(soapMessage);&#xD;&#xA;            return applySecurityPolicyTo(messageContext);&#xD;&#xA;        }&#xD;&#xA;        private boolean applySecurityPolicyTo(MessageContext messageContext) {&#xD;&#xA;            try {&#xD;&#xA;                synchronized (xwsSecurityInterceptor) {&#xD;&#xA;                    xwsSecurityInterceptor.setPolicyConfiguration(new ClassPathResource&#xD;&#xA;                            ("spring/policy/fvsEbms3SecurityPolicy.xml"));&#xD;&#xA;                    xwsSecurityInterceptor.setCallbackHandlers(new CallbackHandler[]{fvsKeyStoreHandler});&#xD;&#xA;                    xwsSecurityInterceptor.afterPropertiesSet();&#xD;&#xA;                    return xwsSecurityInterceptor.handleRequest(messageContext);&#xD;&#xA;                }&#xD;&#xA;            } catch (Exception e) {&#xD;&#xA;                throw new WebServiceFaultException(e.getMessage());&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        @Override&#xD;&#xA;        public boolean handleResponse(MessageContext messageContext) throws WebServiceClientException {&#xD;&#xA;            return true;&#xD;&#xA;        }&#xD;&#xA;        @Override&#xD;&#xA;        public boolean handleFault(MessageContext messageContext) throws WebServiceClientException {&#xD;&#xA;            return true;&#xD;&#xA;        }&#xD;&#xA;        private SOAPMessage getSaajRequestFrom(MessageContext messageContext) {&#xD;&#xA;            return ((SaajSoapMessage) messageContext.getRequest()).getSaajMessage();&#xD;&#xA;        }&#xD;&#xA;        private void insertSAMLTokenIntoWebServiceSecurityHeader(SOAPMessage soapMessage) {&#xD;&#xA;            // Code for adding a saml token into security header comes here. (Code removed for clarity)&#xD;&#xA;        }&#xD;&#xA;    }
    public class HttpManager {&#xD;&#xA;        public static String getData(RequestPackage p) {&#xD;&#xA;            BufferedReader reader = null;&#xD;&#xA;            String uri = p.getUri();&#xD;&#xA;            if (p.getMethod().equals("GET")) {&#xD;&#xA;                uri += "?" + p.getEncodedParams();&#xD;&#xA;            }&#xD;&#xA;            try {&#xD;&#xA;                URL url = new URL(uri);&#xD;&#xA;                HttpURLConnection con = (HttpURLConnection) url.openConnection();&#xD;&#xA;                con.setRequestMethod(p.getMethod());&#xD;&#xA;                if (p.getMethod().equals("POST")) {&#xD;&#xA;                    con.setDoOutput(true);&#xD;&#xA;                    OutputStreamWriter writer = new OutputStreamWriter(con.getOutputStream());&#xD;&#xA;                    writer.write(p.getEncodedParams()); //Url encoded parameters&#xD;&#xA;                    writer.flush();&#xD;&#xA;                }&#xD;&#xA;                StringBuilder sb = new StringBuilder();&#xD;&#xA;                reader = new BufferedReader(new InputStreamReader(con.getInputStream()));&#xD;&#xA;                String line;&#xD;&#xA;                while ((line = reader.readLine()) != null) {&#xD;&#xA;                    sb.append(line + "\n");&#xD;&#xA;                }&#xD;&#xA;                return sb.toString();&#xD;&#xA;            } catch (Exception e) {&#xD;&#xA;                e.printStackTrace();&#xD;&#xA;                return null;&#xD;&#xA;            } finally {&#xD;&#xA;                if (reader != null) {&#xD;&#xA;                    try {&#xD;&#xA;                        reader.close();&#xD;&#xA;                    } catch (IOException e) {&#xD;&#xA;                        e.printStackTrace();&#xD;&#xA;                        return null;&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;    }
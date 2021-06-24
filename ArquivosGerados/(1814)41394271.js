     Graph graph = new Graph(false);&#xD;&#xA;            File f = new File("Filepath");&#xD;&#xA;            Scanner in = new Scanner(f);&#xD;&#xA;            while (in.hasNextLine())&#xD;&#xA;            {&#xD;&#xA;                for (int i =1; i<= numberEdges; i++)&#xD;&#xA;                {&#xD;&#xA;                    String s = in.nextLine();&#xD;&#xA;                    try (Scanner inscan = new Scanner(s)) {&#xD;&#xA;                        while (inscan.hasNext())&#xD;&#xA;                        {&#xD;&#xA;                            int source = inscan.nextInt();&#xD;&#xA;                            int sink = inscan.nextInt();&#xD;&#xA;                            double cost =inscan.nextDouble();&#xD;&#xA;                            double capacity = inscan.nextDouble();&#xD;&#xA;                            Vertex Source = new Vertex(source);&#xD;&#xA;                            Vertex Sink = new Vertex(sink);&#xD;&#xA;                            Edge edge = new Edge(Source,Sink, cost, capacity);&#xD;&#xA;                            graph.addEdge(edge);&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                }    &#xD;&#xA;            }&#xD;&#xA;            in.close();
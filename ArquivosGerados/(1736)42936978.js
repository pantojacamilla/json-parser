        &#xD;&#xA;        private LinkedStack<GameModel> modelStack;&#xD;&#xA;        &#xD;&#xA;        protected GameModel clone()  {&#xD;&#xA;            try{&#xD;&#xA;                GameModel tmp;&#xD;&#xA;                tmp= (GameModel)super.clone();&#xD;&#xA;                // tmp.dotSet=dotSet;&#xD;&#xA;                // tmp.numberOfSteps=numberOfSteps;&#xD;&#xA;                //tmp.numberOfSteps=numberOfSteps.clone();&#xD;&#xA;                System.out.println(tmp);&#xD;&#xA;                return tmp;&#xD;&#xA;            }catch (CloneNotSupportedException e){&#xD;&#xA;                throw new AssertionError();&#xD;&#xA;            }      &#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        private void createModelStack(GameModel model){&#xD;&#xA;            GameModel tmp;&#xD;&#xA;            tmp=model.clone();&#xD;&#xA;            System.out.println(tmp);&#xD;&#xA;            System.out.println(tmp==null);&#xD;&#xA;            modelStack.push(tmp);&#xD;&#xA;        }
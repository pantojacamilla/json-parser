    public class Main extends Application {&#xD;&#xA;        public Stage window = new Stage();&#xD;&#xA;        @Override&#xD;&#xA;        public void start(Stage primaryStage){&#xD;&#xA;            this.window = primaryStage;&#xD;&#xA;            Model model = new Model();&#xD;&#xA;            mainMenuView view = new mainMenuView();&#xD;&#xA;            Presenter presenter = new Presenter(model, view);&#xD;&#xA;            Scene mainMenu = new Scene(view);&#xD;&#xA;            window.setScene(mainMenu);&#xD;&#xA;            window.setTitle("Landen Quiz Main Menu");&#xD;&#xA;            window.setWidth(250);&#xD;&#xA;            window.setHeight(400);&#xD;&#xA;            window.show();&#xD;&#xA;        }&#xD;&#xA;        public static void main(String[] args) {&#xD;&#xA;            launch(args);&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;    }&#xD;&#xA;    //Main class used to make the main menu (first scene)
    public class SomeGameObject : MonoBehaviour {&#xD;&#xA;      public APIClient api;&#xD;&#xA;      void Start () {&#xD;&#xA;        StartCoroutine (api.QueryCall( (bool success) => {&#xD;&#xA;            if (success)&#xD;&#xA;              Debug.Log( "success!");&#xD;&#xA;            else&#xD;&#xA;              Debug.Log( "fail!");&#xD;&#xA;        }))&#xD;&#xA;      }&#xD;&#xA;    }
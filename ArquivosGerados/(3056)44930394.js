    <button *ngFor="let utilfaq of (utilfaqsStream | async) | reverse" class="panel panel-default" type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Large modal</button>&#xD;&#xA;    <div  class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">&#xD;&#xA;      <div class="modal-dialog modal-lg" role="document">&#xD;&#xA;        <div class="modal-content">&#xD;&#xA;         <div class="panel-body" >&#xD;&#xA;                    <td><h5><b>Tema</b></h5>{{utilfaq.tema}}</td>&#xD;&#xA;                    <hr>&#xD;&#xA;                    <td><h5><b>Subtema</b></h5>{{utilfaq.subtema}}</td>&#xD;&#xA;                    <hr>&#xD;&#xA;                    <td><h5><b>Erro</b></h5>{{utilfaq.erro}}</td>&#xD;&#xA;                    <hr>&#xD;&#xA;                    <td><h5><b>Solução</b></h5>{{utilfaq.solucao}}</td>&#xD;&#xA;                &#xD;&#xA;      </div>&#xD;&#xA;        </div>&#xD;&#xA;      </div>&#xD;&#xA;    </div>
$(document).ready(()=>{
    
    $("#Buscar").on("click",function(){
     var cep = $("#cep").val();
     debugger
        if(cep != null && cep != ""){
            $.ajax({
                url:"/index/"+ cep,
                success: function(data){
                $("#DataCep").val(data.cep)
                $("#DataBairro").val(data.bairro)
                $("#DataCompl").val(data.complemento)
                $("#DataIBGE").val(data.ibge)
                $("#DataLograd").val(data.logradouro)
                $("#DataLocalid").val(data.localidade)
                $("#DataSiafi").val(data.siafi)
                $("#DataUF").val(data.uf)
                if(data == "Erro"){
                    window.alert(null,"ERRO: CEP invalido")
                }
                    }
                });
        }else{
            window.alert("ERRO: CEP invalido")
        }
        
    });
})
    
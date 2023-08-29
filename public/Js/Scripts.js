$(document).ready(()=>{
    
    $("#Buscar").on("click",function(){
     var cep = $("#cep").val();
        if(cep != null && cep != "" && cep.length == 8)//Validação se tem ou não um CEP informado
        {
            $.ajax({//Faz a chamada na Controller passando pela route
                url:"/index/"+ cep,
                success: function(data){
                //Popula as caixas de texto da tela
                $("#DataCep").val(data.cep)
                $("#DataBairro").val(data.bairro)
                $("#DataCompl").val(data.complemento)
                $("#DataIBGE").val(data.ibge)
                $("#DataLograd").val(data.logradouro)
                $("#DataLocalid").val(data.localidade)
                $("#DataSiafi").val(data.siafi)
                $("#DataUF").val(data.uf)
                if(data == "Erro")//Validação caso de erro
                {
                    window.alert(null,"ERRO: Erro na hora de buscar por esse CEP")
                }
                    }
                });
        }else
        {
            window.alert("ERRO: CEP invalido!!!")
        }
        
    });
})
    
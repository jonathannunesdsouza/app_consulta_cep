$(document).ready(function(){
	$("#campoCEP").focusout(function() {
		var cep = $("#campoCEP").val()
		cep = cep.replace("-","")

		var url = "https://viacep.com.br/ws/"+ cep + "/json/"

		$.ajax({
			url: url,
			type: "get",
			dataType: "json",
			success: function(data) {
				console.log(data)

				$("#campoCidade").val(data.localidade)
				$("#campoUF").val(data.uf)
				$("#campoRua").val(data.logradouro)
				$("#campoBairro").val(data.bairro)
				
				if (data.complemento === '') {
					$("#campoComplemento").val('Nenhum complemento detectado')
				}
			},
			error: function(erro) {
				console.log(erro)
			}
		})
	})
})
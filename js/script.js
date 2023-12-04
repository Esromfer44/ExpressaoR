
    $(document).ready(function(){
      // Máscaras dos campos
      $('#cpf').mask('000.000.000-00');
      $('#codigoDisciplina').mask('SS-00.000-SSS', {
        translation: {
          'S': {
            pattern: /[A-Za-z]/ // Permite letras maiúsculas ou minúsculas
          }
        }
      });
      $('#telefone').mask('+00(00)00000-0000');
      $('#cronometro').mask('00:00:00:00');
    });

    function validarDataNascimento() {
      var dataNascimento = document.getElementById('dataNascimento').value;
      var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4}|\d{2})$/;
      var valido = regex.test(dataNascimento);
      alert(valido ? 'Data de nascimento válida!' : 'Data de nascimento inválida!');
    }

    function validarCPF() {
      var cpf = document.getElementById('cpf').value;
      var regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      var valido = regex.test(cpf);
      alert(valido ? 'CPF válido!' : 'CPF inválido!');
    }

    function validarMatriculaAluno() {
      var matricula = document.getElementById('matriculaAluno').value;
      var regex = /^(iftm|IFTM)-\d{3}\/\d{3}-[a-zA-Z0-9]$/;
      var valido = regex.test(matricula);
      alert(valido ? 'Matrícula de aluno válida!' : 'Matrícula de aluno inválida!');
    }

    function validarCodigoDisciplina() {
      var codigo = document.getElementById('codigoDisciplina').value;
      var regex = /^MT-\d{2}\.\d{3}-[a-zA-Z]{4}$/;
      var valido = regex.test(codigo);
      alert(valido ? 'Código de disciplina válido!' : 'Código de disciplina inválido!');
    }

    function validarCodigoDisciplinaV2() {
      var codigo = document.getElementById('codigoDisciplinaV2').value;
      var regex = /^MT-\d{2}\.\d{3}-[a-zA-Z]{4}$/;
      var valido = regex.test(codigo);
      alert(valido ? 'Código de disciplina (v2) válido!' : 'Código de disciplina (v2) inválido!');
    }

    function validarCodigoDisciplinaV3() {
      var codigo = document.getElementById('codigoDisciplinaV3').value;
      var regex = /^MT-\d{2}\.\d{3}-[a-zA-Z ]{4}$/;
      var valido = regex.test(codigo);
      alert(valido ? 'Código de disciplina (v3) válido!' : 'Código de disciplina (v3) inválido!');
    }

    function validarNomeCampus() {
      var nomeCampus = document.getElementById('nomeCampus').value;
      var regex = /^(IFTM campus Uberlândia|IFTM campus Uberlândia Centro)$/;
      var valido = regex.test(nomeCampus);
      alert(valido ? 'Nome do campus válido!' : 'Nome do campus inválido!');
    }

    function validarTelefone() {
      var telefone = document.getElementById('telefone').value;
      var regex = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;
      var valido = regex.test(telefone);
      alert(valido ? 'Telefone válido!' : 'Telefone inválido!');
    }

    function validarTelefoneV2() {
      var telefone = document.getElementById('telefoneV2').value;
      var regex = /^\(\d{2,3}\)\s?\d{4,5}-\d{4}$/;
      var valido = regex.test(telefone);
      alert(valido ? 'Telefone (v2) válido!' : 'Telefone (v2) inválido!');
    }

    function validarAlturaPessoa() {
      var altura = document.getElementById('altura').value;
      var regex = /^[1-2](\.\d{1,2})?$/;
      var valido = regex.test(altura);
      var alturaFloat = parseFloat(altura);
      var mensagem = '';
      if (valido && (alturaFloat < 1.3 || alturaFloat > 2.5)) {
        mensagem = 'Altura fora do intervalo permitido!';
        valido = false;
      } else {
        mensagem = valido ? 'Altura de pessoa válida!' : 'Altura de pessoa inválida!';
      }
      alert(mensagem);
    }

    function validarFaturamento() {
      var faturamento = document.getElementById('faturamento').value;
      var regex = /^R\$(\d{1,3}(\.\d{3})*|\d+)(,\d{2})?$/;
      var valido = regex.test(faturamento);
      alert(valido ? 'Faturamento válido!' : 'Faturamento inválido!');
    }

    function validarCronometro() {
      var cronometro = document.getElementById('cronometro').value;
      var regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]:[0-9]{2}$/;
      var valido = regex.test(cronometro);
      alert(valido ? 'Cronômetro válido!' : 'Cronômetro inválido!');
    }
  
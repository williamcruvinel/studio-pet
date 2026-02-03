'use client';
import Image from 'next/image';
import Style from '../styles/form.module.css';

function Form() {
  return (
    <section id="agendamentoForm">
      <h2 className={Style.subTitle}>Faça seu agendamento</h2>
      <div className={Style.container}>
        <div className={Style.formWrapper}>
          <Image
            className={Style.imgForm}
            src="/dog.png"
            alt="dois cachoros e um gato"
            fill
            priority
          />
        </div>

        <form className={Style.form} >
          <h3>Novo Agendamento</h3>

          <div className={Style.grupForm}>
            <label>Serviço *</label>
            <select
              className={Style.input}
              id="servico"
              name="servico"
              required
            >
              <option value="">Selecione um serviço</option>
              <option value="banho">Banho</option>
              <option value="tosa">Tosa</option>
              <option value="banho-tosa">Banho + Tosa</option>
              <option value="consulta">Consulta Veterinária</option>
              <option value="vacina">Vacinação</option>
              <option value="hospedagem">Hospedagem</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div className={Style.grupForm}>
            <label>Data *</label>
            <input
              className={Style.input}
              type="date"
              id="data"
              name="data"
              required
              min="2026-02-02"
            />
          </div>

          <div className={Style.grupForm}>
            <label>Horário *</label>
            <select
              className={Style.input}
              id="horario"
              name="horario"
              required
            >
              <option className={Style.input} value="">
                Selecione um horário
              </option>
            </select>
          </div>

          <div className={Style.grupForm}>
            <label>Nome do Tutor *</label>
            <input
              className={Style.input}
              type="text"
              id="nomeTutor"
              name="nomeTutor"
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div className={Style.grupForm}>
            <label>Nome do Pet *</label>
            <input
              className={Style.input}
              type="text"
              id="nomePet"
              name="nomePet"
              placeholder="Nome do seu pet"
              required
            />
          </div>

          <div className={Style.grupForm}>
            <label>Telefone *</label>
            <input
              className={Style.input}
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(11) 99999-9999"
              required
            />
          </div>

          <button type="submit" className={Style.btnSubmit}>
            Confirmar agendamento
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;

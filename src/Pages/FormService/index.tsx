import "../../styles/main.css";
import { Button } from '../../components/Button';
import { CardTitle } from '../../components/CardTitle';
import { CardLine } from '../../components/CardLine';
import { CardFloatingLabelInput } from "../../components/CardFloatingLabelInput";
import { CardFloatingLabelTextarea } from "../../components/CardFloatingLabelTextarea";

function FormService() {
  return (
		<div className="font-roboto mt-44 mb-[5.25rem] container w-[50.5rem] h-[32rem] mx-auto bg-branco-gelo rounded-lg shadow-sombra-card">
			<div className="pl-9 pt-8">
				<CardTitle title="Solicitar Serviço" />
			</div>
			<div className="mt-4 mb-10">
				<CardLine />
			</div>
			<form action="">
				<div>
					<CardFloatingLabelInput
						label="Título"
						inputId="title"
						width="w-full"
					/>
				</div>
				<div className="mt-9">
					<CardFloatingLabelTextarea
						label="Descrição"
						textareaId="description"
					/>
				</div>
			</form>
			<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
				<Button
					title="Solicitar"
					style="btn-primary-action"
				/>
				<Button
					title="Cancelar"
					style="btn-secondary-action"
				/>
			</div>
		</div>
	);
}

export default FormService;

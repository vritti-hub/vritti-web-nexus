export interface SignUpFormProps {
  onSubmit?: (data: SignUpFormData) => void;
}

export interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
}

export interface SignUpInfoPanelProps {
  title?: string;
  description?: string;
}

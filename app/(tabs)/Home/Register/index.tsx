import Input from "@/src/components/Input";
import { useUser } from "@/src/context/UserContext";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

const Register = () => {
  const { registerUser } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [table, setTable] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    cpf: "",
    table: "",
  });
  const greetingName = name.trim() || "usuario";

  const formatCpf = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    return digits
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value.trim());

  const handleCpfChange = (text: string) => {
    setCpf(formatCpf(text));
    if (errors.cpf) {
      setErrors((current) => ({ ...current, cpf: "" }));
    }
  };

  const handleTableChange = (text: string) => {
    setTable(text.replace(/\D/g, "").slice(0, 3));
    if (errors.table) {
      setErrors((current) => ({ ...current, table: "" }));
    }
  };

  const isFormValid =
    Boolean(name.trim()) &&
    validateEmail(email) &&
    cpf.replace(/\D/g, "").length === 11 &&
    Boolean(table.trim());

  const handleRegister = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const rawCpf = cpf.replace(/\D/g, "");
    const trimmedTable = table.trim();
    const nextErrors: typeof errors = {
      name: "",
      email: "",
      cpf: "",
      table: "",
    };

    if (!trimmedName) {
      nextErrors.name = "Informe seu nome completo.";
    } else if (trimmedName.length < 3) {
      nextErrors.name = "Nome deve ter ao menos 3 caracteres.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "Informe seu e-mail.";
    } else if (!validateEmail(trimmedEmail)) {
      nextErrors.email = "E-mail inválido.";
    }

    if (!rawCpf) {
      nextErrors.cpf = "Informe seu CPF.";
    } else if (rawCpf.length !== 11) {
      nextErrors.cpf = "CPF deve conter 11 dígitos.";
    }

    if (!trimmedTable) {
      nextErrors.table = "Informe o número da mesa.";
    }

    setErrors(nextErrors);

    if (Object.values(nextErrors).some((error) => error.length)) {
      return;
    }

    registerUser({
      name: trimmedName,
      email: trimmedEmail,
      cpf: formatCpf(rawCpf),
      table: trimmedTable,
    });
    router.push("/(tabs)/Profile");
  };

  return (
    <LinearGradient
      colors={["#FFF193", "#F71C1C"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.topContainer}>
        <Text style={styles.title}>Ola, {greetingName}</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputsWrapper}>
          <Input placeholder="Nome" value={name} onChangeText={setName} />
          {errors.name ? (
            <Text style={styles.errorText}>{errors.name}</Text>
          ) : null}
          <Input
            placeholder="CPF"
            value={cpf}
            onChangeText={handleCpfChange}
            keyboardType="numeric"
          />
          {errors.cpf ? (
            <Text style={styles.errorText}>{errors.cpf}</Text>
          ) : null}
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
          <Input
            placeholder="Mesa"
            value={table}
            onChangeText={handleTableChange}
            keyboardType="numeric"
          />
          {errors.table ? (
            <Text style={styles.errorText}>{errors.table}</Text>
          ) : null}
        </View>

        <TouchableOpacity
          style={[styles.button, { opacity: isFormValid ? 1 : 0.6 }]}
          onPress={handleRegister}
          disabled={!isFormValid}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Register;

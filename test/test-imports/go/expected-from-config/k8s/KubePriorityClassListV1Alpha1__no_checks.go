//go:build no_runtime_type_checking

// k8s
package k8s

// Building without runtime type checking enabled, so all the below just return nil

func validateKubePriorityClassListV1Alpha1_IsConstructParameters(x interface{}) error {
	return nil
}

func validateKubePriorityClassListV1Alpha1_ManifestParameters(props *KubePriorityClassListV1Alpha1Props) error {
	return nil
}

func validateKubePriorityClassListV1Alpha1_OfParameters(c constructs.IConstruct) error {
	return nil
}

func validateNewKubePriorityClassListV1Alpha1Parameters(scope constructs.Construct, id *string, props *KubePriorityClassListV1Alpha1Props) error {
	return nil
}

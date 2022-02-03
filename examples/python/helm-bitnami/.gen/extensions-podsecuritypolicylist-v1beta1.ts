// generated by cdk8s

import { ApiObject } from 'cdk8s';
import { Construct } from '@aws-cdk/core';


/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects. Deprecated: use PodSecurityPolicyList from policy API Group instead.
 */
export class PodSecurityPolicyList extends ApiObject {
  public constructor(scope: Construct, ns: string, options: PodSecurityPolicyListOptions) {
    super(scope, ns, {
      ...options,
      kind: 'PodSecurityPolicyList',
      apiVersion: 'extensions/v1beta1',
    });
  }
}

/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects. Deprecated: use PodSecurityPolicyList from policy API Group instead.
 */
export interface PodSecurityPolicyListOptions {
  /**
   * items is a list of schema objects.
   */
  readonly items?: PodSecurityPolicy[];

  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata?: ListMeta;

}

/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated: use PodSecurityPolicy from policy API Group instead.
 */
export interface PodSecurityPolicy {
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata?: ObjectMeta;

  /**
   * spec defines the policy enforced.
   */
  readonly spec?: PodSecurityPolicySpec;

}

/**
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
 */
export interface ListMeta {
  /**
   * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
   */
  readonly continue?: string;

  /**
   * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
   */
  readonly resourceVersion?: string;

  /**
   * selfLink is a URL representing this object. Populated by the system. Read-only.
   */
  readonly selfLink?: string;

}

/**
 * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
 */
export interface ObjectMeta {
  /**
   * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
   */
  readonly annotations?: { [key: string]: string };

  /**
   * The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.
   */
  readonly clusterName?: string;

  /**
   * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.

Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  readonly creationTimestamp?: Time;

  /**
   * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
   */
  readonly deletionGracePeriodSeconds?: number;

  /**
   * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.

Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  readonly deletionTimestamp?: Time;

  /**
   * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed.
   */
  readonly finalizers?: string[];

  /**
   * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.

If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).

Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency
   */
  readonly generateName?: string;

  /**
   * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
   */
  readonly generation?: number;

  /**
   * An initializer is a controller which enforces some system invariant at object creation time. This field is a list of initializers that have not yet acted on this object. If nil or empty, this object has been completely initialized. Otherwise, the object is considered uninitialized and is hidden (in list/watch and get calls) from clients that haven't explicitly asked to observe uninitialized objects.

When an object is created, the system will populate this list with the current set of initializers. Only privileged users may set or modify this list. Once it is empty, it may not be modified further by any user.

DEPRECATED - initializers are an alpha field and will be removed in v1.15.
   */
  readonly initializers?: Initializers;

  /**
   * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
   */
  readonly labels?: { [key: string]: string };

  /**
   * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.

This field is alpha and can be changed or removed without notice.
   */
  readonly managedFields?: ManagedFieldsEntry[];

  /**
   * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   */
  readonly name?: string;

  /**
   * Namespace defines the space within each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
   */
  readonly namespace?: string;

  /**
   * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
   */
  readonly ownerReferences?: OwnerReference[];

  /**
   * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.

Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
   */
  readonly resourceVersion?: string;

  /**
   * SelfLink is a URL representing this object. Populated by the system. Read-only.
   */
  readonly selfLink?: string;

  /**
   * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.

Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   */
  readonly uid?: string;

}

/**
 * PodSecurityPolicySpec defines the policy enforced. Deprecated: use PodSecurityPolicySpec from policy API Group instead.
 */
export interface PodSecurityPolicySpec {
  /**
   * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
   */
  readonly allowPrivilegeEscalation?: boolean;

  /**
   * AllowedCSIDrivers is a whitelist of inline CSI drivers that must be explicitly set to be embedded within a pod spec. An empty value means no CSI drivers can run inline within a pod spec.
   */
  readonly allowedCSIDrivers?: AllowedCSIDriver[];

  /**
   * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
   */
  readonly allowedCapabilities?: string[];

  /**
   * allowedFlexVolumes is a whitelist of allowed Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the "volumes" field.
   */
  readonly allowedFlexVolumes?: AllowedFlexVolume[];

  /**
   * allowedHostPaths is a white list of allowed host paths. Empty indicates that all host paths may be used.
   */
  readonly allowedHostPaths?: AllowedHostPath[];

  /**
   * AllowedProcMountTypes is a whitelist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
   */
  readonly allowedProcMountTypes?: string[];

  /**
   * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to whitelist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.
   */
  readonly allowedUnsafeSysctls?: string[];

  /**
   * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
   */
  readonly defaultAddCapabilities?: string[];

  /**
   * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
   */
  readonly defaultAllowPrivilegeEscalation?: boolean;

  /**
   * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.
   */
  readonly forbiddenSysctls?: string[];

  /**
   * fsGroup is the strategy that will dictate what fs group is used by the SecurityContext.
   */
  readonly fsGroup?: FSGroupStrategyOptions;

  /**
   * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
   */
  readonly hostIPC?: boolean;

  /**
   * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
   */
  readonly hostNetwork?: boolean;

  /**
   * hostPID determines if the policy allows the use of HostPID in the pod spec.
   */
  readonly hostPID?: boolean;

  /**
   * hostPorts determines which host port ranges are allowed to be exposed.
   */
  readonly hostPorts?: HostPortRange[];

  /**
   * privileged determines if a pod can request to be run as privileged.
   */
  readonly privileged?: boolean;

  /**
   * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
   */
  readonly readOnlyRootFilesystem?: boolean;

  /**
   * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
   */
  readonly requiredDropCapabilities?: string[];

  /**
   * RunAsGroup is the strategy that will dictate the allowable RunAsGroup values that may be set. If this field is omitted, the pod's RunAsGroup can take any value. This field requires the RunAsGroup feature gate to be enabled.
   */
  readonly runAsGroup?: RunAsGroupStrategyOptions;

  /**
   * runAsUser is the strategy that will dictate the allowable RunAsUser values that may be set.
   */
  readonly runAsUser?: RunAsUserStrategyOptions;

  /**
   * seLinux is the strategy that will dictate the allowable labels that may be set.
   */
  readonly seLinux?: SELinuxStrategyOptions;

  /**
   * supplementalGroups is the strategy that will dictate what supplemental groups are used by the SecurityContext.
   */
  readonly supplementalGroups?: SupplementalGroupsStrategyOptions;

  /**
   * volumes is a white list of allowed volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'.
   */
  readonly volumes?: string[];

}

/**
 * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
 */
export type Time = Date;

/**
 * Initializers tracks the progress of initialization.
 */
export interface Initializers {
  /**
   * Pending is a list of initializers that must execute in order before this object is visible. When the last pending initializer is removed, and no failing result is set, the initializers struct will be set to nil and the object is considered as initialized and visible to all clients.
   */
  readonly pending?: Initializer[];

  /**
   * If result is set with the Failure field, the object will be persisted to storage and then deleted, ensuring that other clients can observe the deletion.
   */
  readonly result?: Status;

}

/**
 * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
 */
export interface ManagedFieldsEntry {
  /**
   * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
   */
  readonly apiVersion?: string;

  /**
   * Fields identifies a set of fields.
   */
  readonly fields?: Fields;

  /**
   * Manager is an identifier of the workflow managing these fields.
   */
  readonly manager?: string;

  /**
   * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
   */
  readonly operation?: string;

  /**
   * Time is timestamp of when these fields were set. It should always be empty if Operation is 'Apply'
   */
  readonly time?: Time;

}

/**
 * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
 */
export interface OwnerReference {
  /**
   * API version of the referent.
   */
  readonly apiVersion?: string;

  /**
   * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
   * @default false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
   */
  readonly blockOwnerDeletion?: boolean;

  /**
   * If true, this reference points to the managing controller.
   */
  readonly controller?: boolean;

  /**
   * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  readonly kind?: string;

  /**
   * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   */
  readonly name?: string;

  /**
   * UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   */
  readonly uid?: string;

}

/**
 * AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used.
 */
export interface AllowedCSIDriver {
  /**
   * Name is the registered name of the CSI driver
   */
  readonly name?: string;

}

/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used. Deprecated: use AllowedFlexVolume from policy API Group instead.
 */
export interface AllowedFlexVolume {
  /**
   * driver is the name of the Flexvolume driver.
   */
  readonly driver?: string;

}

/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. Deprecated: use AllowedHostPath from policy API Group instead.
 */
export interface AllowedHostPath {
  /**
   * pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.

Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`
   */
  readonly pathPrefix?: string;

  /**
   * when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.
   */
  readonly readOnly?: boolean;

}

/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use FSGroupStrategyOptions from policy API Group instead.
 */
export interface FSGroupStrategyOptions {
  /**
   * ranges are the allowed ranges of fs groups.  If you would like to force a single fs group then supply a single range with the same start and end. Required for MustRunAs.
   */
  readonly ranges?: IDRange[];

  /**
   * rule is the strategy that will dictate what FSGroup is used in the SecurityContext.
   */
  readonly rule?: string;

}

/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. Deprecated: use HostPortRange from policy API Group instead.
 */
export interface HostPortRange {
  /**
   * max is the end of the range, inclusive.
   */
  readonly max?: number;

  /**
   * min is the start of the range, inclusive.
   */
  readonly min?: number;

}

/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsGroupStrategyOptions from policy API Group instead.
 */
export interface RunAsGroupStrategyOptions {
  /**
   * ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs.
   */
  readonly ranges?: IDRange[];

  /**
   * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
   */
  readonly rule?: string;

}

/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsUserStrategyOptions from policy API Group instead.
 */
export interface RunAsUserStrategyOptions {
  /**
   * ranges are the allowed ranges of uids that may be used. If you would like to force a single uid then supply a single range with the same start and end. Required for MustRunAs.
   */
  readonly ranges?: IDRange[];

  /**
   * rule is the strategy that will dictate the allowable RunAsUser values that may be set.
   */
  readonly rule?: string;

}

/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use SELinuxStrategyOptions from policy API Group instead.
 */
export interface SELinuxStrategyOptions {
  /**
   * rule is the strategy that will dictate the allowable labels that may be set.
   */
  readonly rule?: string;

  /**
   * seLinuxOptions required to run as; required for MustRunAs More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
   */
  readonly seLinuxOptions?: SELinuxOptions;

}

/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use SupplementalGroupsStrategyOptions from policy API Group instead.
 */
export interface SupplementalGroupsStrategyOptions {
  /**
   * ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end. Required for MustRunAs.
   */
  readonly ranges?: IDRange[];

  /**
   * rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
   */
  readonly rule?: string;

}

/**
 * Initializer is information about an initializer that has not yet completed.
 */
export interface Initializer {
  /**
   * name of the process that is responsible for initializing this object.
   */
  readonly name?: string;

}

/**
 * Status is a return value for calls that don't return other objects.
 */
export interface Status {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  readonly apiVersion?: string;

  /**
   * Suggested HTTP return code for this status, 0 if not set.
   */
  readonly code?: number;

  /**
   * Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type.
   */
  readonly details?: StatusDetails;

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  readonly kind?: string;

  /**
   * A human-readable description of the status of this operation.
   */
  readonly message?: string;

  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  readonly metadata?: ListMeta;

  /**
   * A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
   */
  readonly reason?: string;

  /**
   * Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  readonly status?: string;

}

/**
 * Fields stores a set of fields in a data structure like a Trie. To understand how this is used, see: https://github.com/kubernetes-sigs/structured-merge-diff
 */
export type Fields = "unknown [object Object]";

/**
 * IDRange provides a min/max of an allowed range of IDs. Deprecated: use IDRange from policy API Group instead.
 */
export interface IDRange {
  /**
   * max is the end of the range, inclusive.
   */
  readonly max?: number;

  /**
   * min is the start of the range, inclusive.
   */
  readonly min?: number;

}

/**
 * SELinuxOptions are the labels to be applied to the container
 */
export interface SELinuxOptions {
  /**
   * Level is SELinux level label that applies to the container.
   */
  readonly level?: string;

  /**
   * Role is a SELinux role label that applies to the container.
   */
  readonly role?: string;

  /**
   * Type is a SELinux type label that applies to the container.
   */
  readonly type?: string;

  /**
   * User is a SELinux user label that applies to the container.
   */
  readonly user?: string;

}

/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
 */
export interface StatusDetails {
  /**
   * The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
   */
  readonly causes?: StatusCause[];

  /**
   * The group attribute of the resource associated with the status StatusReason.
   */
  readonly group?: string;

  /**
   * The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  readonly kind?: string;

  /**
   * The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
   */
  readonly name?: string;

  /**
   * If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
   */
  readonly retryAfterSeconds?: number;

  /**
   * UID of the resource. (when there is a single resource which can be described). More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   */
  readonly uid?: string;

}

/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 */
export interface StatusCause {
  /**
   * The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.

Examples:
  "name" - the field "name" on the current resource
  "items[0].name" - the field "name" on the first array entry in "items"
   */
  readonly field?: string;

  /**
   * A human-readable description of the cause of the error.  This field may be presented as-is to a reader.
   */
  readonly message?: string;

  /**
   * A machine-readable description of the cause of the error. If this value is empty there is no information available.
   */
  readonly reason?: string;

}

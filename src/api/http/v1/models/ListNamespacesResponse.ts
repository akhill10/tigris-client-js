/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DescribeNamespacesData } from './DescribeNamespacesData';
import type { NamespaceInfo } from './NamespaceInfo';

export type ListNamespacesResponse = {
    namespaces?: Array<NamespaceInfo>;
    data?: DescribeNamespacesData;
};


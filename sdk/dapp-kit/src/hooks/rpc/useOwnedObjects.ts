// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/**
 *  ######################################
 *  ### DO NOT EDIT THIS FILE DIRECTLY ###
 *  ######################################
 *
 * This file is generated from:
 * /crates/sui-open-rpc/spec/openrpc.json
 */

import type { GetOwnedObjectsParams } from '@mysten/sui.js/client';
import type { UseSuiClientQueryOptions } from '../useSuiClientQuery.js';
import type { UseSuiClientInfiniteQueryOptions } from '../useSuiClientInfiniteQuery.js';
import { useSuiClientQuery } from '../useSuiClientQuery.js';
import { useSuiClientInfiniteQuery } from '../useSuiClientInfiniteQuery.js';

export function useOwnedObjects(
	params: GetOwnedObjectsParams,
	options?: UseSuiClientQueryOptions<'getOwnedObjects'>,
) {
	return useSuiClientQuery(
		{
			method: 'getOwnedObjects',
			params,
		},
		options,
	);
}

export function useOwnedObjectsInfinite(
	params: GetOwnedObjectsParams,
	options?: UseSuiClientInfiniteQueryOptions<'getOwnedObjects'>,
) {
	return useSuiClientInfiniteQuery(
		{
			method: 'getOwnedObjects',
			params,
		},
		options,
	);
}

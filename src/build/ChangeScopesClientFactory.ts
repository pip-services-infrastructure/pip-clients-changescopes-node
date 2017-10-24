import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-commons-node';

import { ChangeScopesNullClientV1 } from '../version1/ChangeScopesNullClientV1';
import { ChangeScopesDirectClientV1 } from '../version1/ChangeScopesDirectClientV1';
import { ChangeScopesHttpClientV1 } from '../version1/ChangeScopesHttpClientV1';
import { ChangeScopesLambdaClientV1 } from '../version1/ChangeScopesLambdaClientV1';
import { ChangeScopesSenecaClientV1 } from '../version1/ChangeScopesSenecaClientV1';

export class ChangeScopesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-changescopes', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-changescopes', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-changescopes', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-changescopes', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('pip-services-changescopes', 'client', 'lambda', 'default', '1.0');
	public static SenecaClientV1Descriptor = new Descriptor('pip-services-changescopes', 'client', 'seneca', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(ChangeScopesClientFactory.NullClientV1Descriptor, ChangeScopesNullClientV1);
		this.registerAsType(ChangeScopesClientFactory.DirectClientV1Descriptor, ChangeScopesDirectClientV1);
		this.registerAsType(ChangeScopesClientFactory.HttpClientV1Descriptor, ChangeScopesHttpClientV1);
		this.registerAsType(ChangeScopesClientFactory.LambdaClientV1Descriptor, ChangeScopesLambdaClientV1);
		this.registerAsType(ChangeScopesClientFactory.SenecaClientV1Descriptor, ChangeScopesSenecaClientV1);
	}
	
}

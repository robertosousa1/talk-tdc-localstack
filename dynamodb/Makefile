table_name=users
endpoint_url=http://localhost:4566

create-table:
	@aws dynamodb create-table \
	--endpoint-url $(endpoint_url) \
	--table-name $(table_name) \
	--attribute-definitions AttributeName=id,AttributeType=S \
	--key-schema AttributeName=id,KeyType=HASH \
	--billing-mode PAY_PER_REQUEST \
	--region "us-east-1"

delete-table:
	@aws dynamodb delete-table \
	--endpoint-url $(endpoint_url) \
	--table-name $(table_name) \
	--region "us-east-1"
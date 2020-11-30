bucket_name=users-image
table_name=users
endpoint_url=http://localhost:4566

create-bucket:
	@aws s3 mb s3://$(bucket_name) \
	--endpoint-url $(endpoint_url) \
	--region "us-east-1"

list-bucket:
	@aws s3 ls \
	--endpoint-url $(endpoint_url) \
	--region "us-east-1"

signed-url-object:
	@aws s3 presign s3://$(bucket_name)/tdc-logo.png \
	--endpoint-url $(endpoint_url) \
	--region "us-east-1"

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
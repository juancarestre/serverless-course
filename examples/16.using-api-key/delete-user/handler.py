import boto3, json, os

client = boto3.resource('dynamodb')

IS_OFFLINE = os.getenv('IS_OFFLINE', False)
if IS_OFFLINE:
    boto3.Session(
        aws_access_key_id='ACCESS_KEY',
        aws_secret_access_key='SECRET_KEY',
    )
    client = boto3.resource('dynamodb', endpoint_url='http://localhost:8000')

table = client.Table('user-crud-sls-app')

def delete_user(event, context):
    user_id=event['pathParameters']['idx']
    result=table.delete_item(Key = {'pk': user_id})
    
    body = json.dumps({
        "message": f"user {user_id} deleted"
    })

    response = {
        "statusCode": result['ResponseMetadata']['HTTPStatusCode'],
        "body": body
    }
    return response



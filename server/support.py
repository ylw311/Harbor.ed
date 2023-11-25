from infobip_channels.sms.channel import SMSChannel
from config.settings import INFOBIP_API_KEY, INFOBIP_API_BASE_URL, \
    INFOBIP_SMS_RECIPIENT, INFOBIP_EMAIL_SENDER, INFOBIP_EMAIL_RECIPIENT
import requests
import os


def send_sms_message():
    channel = SMSChannel.from_auth_params(
        {
            "base_url": INFOBIP_API_BASE_URL,
            "api_key": INFOBIP_API_KEY
        }
    )

    sms_response = channel.send_sms_message(
        {
            "messages": [
                {
                    "destinations": [{"to": INFOBIP_SMS_RECIPIENT}],
                    "text": "Please feel better.",
                }
            ]
        }
    )

    print("SMS sent:", sms_response)



def send_email(attachment_path):
    base_url = INFOBIP_API_BASE_URL

    if not base_url.startswith("http://") and not base_url.startswith("https://"):
        base_url = "https://" + base_url

    api_key = INFOBIP_API_KEY
    if not api_key.startswith("App "):
        api_key = "App " + api_key

    form_data = {
        "from": INFOBIP_EMAIL_SENDER,
        "to": INFOBIP_EMAIL_RECIPIENT,
        "subject": "Please feel better",
        "text": "Please"
    }

    headers = {
        "Authorization": api_key
    }

    if attachment_path:
        with open(attachment_path, 'rb') as file:
            files = {'attachment': (os.path.basename(attachment_path), file)}
            response = requests.post(base_url + "/email/3/send", data=form_data, files=files, headers=headers)
            print("Status Code:", response.status_code)
            print(response.json())
        file.close()
    else:
        response = requests.post(base_url + "/email/3/send", data=form_data, headers=headers)
        print("Status Code:", response.status_code)
        print(response.json())


send_email("attachment.png")

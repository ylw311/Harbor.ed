from infobip_channels.sms.channel import SMSChannel
from config.settings import INFOBIP_API_KEY, INFOBIP_API_BASE_URL, INFOBIP_RECEPIENT


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
                    "destinations": [{"to": INFOBIP_RECEPIENT}],
                    "text": "Please feel better.",
                }
            ]
        }
    )

    print("SMS sent:", sms_response)
